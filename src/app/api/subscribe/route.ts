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
    const { email } = await request.json();
    console.log('Received email:', email);
    console.log('Spreadsheet ID:', SPREADSHEET_ID);
    console.log('Client Email:', process.env.GOOGLE_CLIENT_EMAIL);
    console.log('Private Key exists:', !!process.env.GOOGLE_PRIVATE_KEY);

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.log('Invalid email format');
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Append to Google Sheet
    try {
      const result = await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: 'A:B', // Assumes columns A for email and B for timestamp
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[email, new Date().toISOString()]],
        },
      });
      console.log('Sheet append result:', result.data);
    } catch (sheetError: any) {
      console.error('Google Sheets API error:', {
        message: sheetError.message,
        code: sheetError.code,
        details: sheetError.response?.data
      });
      throw sheetError;
    }

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Subscription error:', {
      message: error.message,
      stack: error.stack
    });
    return NextResponse.json(
      { error: 'Failed to subscribe: ' + error.message },
      { status: 500 }
    );
  }
} 