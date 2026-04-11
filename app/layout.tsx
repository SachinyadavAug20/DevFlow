import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src:"./fonts/interFont.ttf",
  variable: "--font-inter",
  weight:"100 200 300 400 500 600 700 800 900"
});
const diff = localFont({
  src:"./fonts/diff.ttf",
  variable: "--font-diff",
  weight:"100 200 300 400 500 600 700 800 900"
});
const logofont = localFont({
  src:"./fonts/logofont.ttf",
  variable: "--font-logofont",
  weight:"100 200 300 400 500 600 700 800 900"
});

export const metadata: Metadata = {
  title: "DevFlow",
  description: "For students to learn and grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${diff.variable} ${logofont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
