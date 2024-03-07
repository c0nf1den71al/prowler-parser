import type { Metadata } from "next";
import DataProvider from "@/lib/DataProvider"
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prowler Parser",
  description: "Parse your JSON output from Prowler!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DataProvider>
          {children}
        </DataProvider>
        </body>
    </html>
  );
}
