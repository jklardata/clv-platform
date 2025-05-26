import { google } from 'googleapis';
import { NextResponse } from 'next/server';

// Initialize Google Sheets API
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;

export async function POST(request: Request) {
  try {
    // Log environment variables (excluding sensitive data)
    console.log('Environment check:', {
      hasClientEmail: !!process.env.GOOGLE_CLIENT_EMAIL,
      hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
      spreadsheetId: SPREADSHEET_ID,
      privateKeyLength: process.env.GOOGLE_PRIVATE_KEY?.length,
    });

    const { email } = await request.json();
    console.log('Processing email subscription for:', email);

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.log('Invalid email format:', email);
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (!SPREADSHEET_ID) {
      throw new Error('GOOGLE_SHEET_ID is not configured');
    }

    if (!process.env.GOOGLE_CLIENT_EMAIL) {
      throw new Error('GOOGLE_CLIENT_EMAIL is not configured');
    }

    if (!process.env.GOOGLE_PRIVATE_KEY) {
      throw new Error('GOOGLE_PRIVATE_KEY is not configured');
    }

    // Append to Google Sheet
    try {
      console.log('Attempting to append to sheet:', SPREADSHEET_ID);
      const result = await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: 'A:B', // Assumes columns A for email and B for timestamp
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[email, new Date().toISOString()]],
        },
      });
      console.log('Sheet append result:', {
        updatedRange: result.data.updates?.updatedRange,
        updatedRows: result.data.updates?.updatedRows,
      });
    } catch (sheetError: any) {
      console.error('Google Sheets API error:', {
        message: sheetError.message,
        code: sheetError.code,
        status: sheetError.response?.status,
        statusText: sheetError.response?.statusText,
        details: sheetError.response?.data
      });
      throw new Error(`Google Sheets API error: ${sheetError.message}`);
    }

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Subscription error:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    return NextResponse.json(
      { error: `Failed to subscribe: ${error.message}` },
      { status: 500 }
    );
  }
} 