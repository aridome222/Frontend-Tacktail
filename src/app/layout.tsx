import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TackTail",
  description: "宅飲みを一段上の領域へ！あなたも宅飲みカクテル始めませんか！？",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className={`${geistSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
