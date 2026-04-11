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
  description: "DevFlow provides a platform for jr collge students to directly connect to seniors ofthere college and get answer to there query from the trusted and relaible source.Explore topic like study material, suggested course, best practice, mistakes to avoid, roadmaps to follow and more.",
  icons:{
    icon:'/images/site-logo.svg'
  }
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
