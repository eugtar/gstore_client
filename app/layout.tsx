import "./globals.css";
import type { Metadata } from "next";
import { ReactNode, FC } from "react";
import Footer from "@/components/fotter";
import Navbar from "@/components/navbar";
import { Urbanist } from "next/font/google";
import ModalProvider from "@/providers/modal-provider";
import ToasterProvider from "@/providers/toast-provider";

const urbanist = Urbanist({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "GStore",
  description: "Clothing&Accessories",
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ToasterProvider />
        <header>
          <Navbar />
        </header>
        <main>
          <ModalProvider />
          {children}
        </main>
        <footer className="border-t bg-white">
          <Footer />
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
export { metadata };
