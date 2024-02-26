import type { Metadata } from "next";
import { Julius_Sans_One, Archivo_Narrow } from "next/font/google";
import "./globals.css";
import TopNotifs from "@/components/topnotifs/TopNotifs";
import Logo from "@/components/logo/Logo";
import Navbar from "@/components/navbar/Navbar";
import AtomLoader from "@/components/AtomLoader";
import Footer from "@/components/footer/Footer";

const JuliusSansOne = Julius_Sans_One({ subsets: ["latin"], weight: ["400"] });
const ArchivoNarrow = Archivo_Narrow({ subsets: ["latin"], weight: ["400", "700"] });

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
      <body className={ArchivoNarrow.className}>
        <AtomLoader />

        <div style={{ backgroundColor: "#000", display: "grid" }}>
          <TopNotifs />
          <Logo />
          <Navbar />
        </div>

        {children}

        <Footer />
      </body>
    </html>
  );
}
