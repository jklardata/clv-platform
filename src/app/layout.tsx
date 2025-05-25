import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI-Powered CLV Optimization Platform",
  description: "Transform your customer relationships into lasting, profitable partnerships with our AI-powered Customer Lifetime Value Optimization Platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} pt-16`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
