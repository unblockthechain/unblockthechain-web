import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Unblock the Chain | Web3 Security Audits & Smart Contract Assurance",
  description:
    "Enterprise blockchain security. Smart contract audits, RWA tokenization, and Web3 security for protocols and institutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
