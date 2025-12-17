import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Triple A Band",
  description: "To be continued...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative">
          <div className="fixed inset-x-0 top-0 z-50 h-[81px] bg-[#F12323] text-white flex items-center overflow-hidden px-4 text-sm md:text-base">
            <div className="ticker whitespace-nowrap">
              <a
                href="https://techsynbal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline-offset-4 hover:underline"
              >
                CHECK OUT TECHSYNBAL.COM’S ALREADY LIVE
              </a>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
