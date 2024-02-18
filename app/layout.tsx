import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNotifs from "@/components/TopNotifs";
import Logo from "@/components/logo/Logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Source",
  description: "Generated by Max",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNotifs />
        <Logo />
        {children}
      </body>
    </html>
  );
}
