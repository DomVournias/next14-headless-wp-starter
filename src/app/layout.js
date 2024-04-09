import "./globals.css";

import { Inter } from "next/font/google";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// import { fetchLayout } from "./lib/functions";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  // const layout = await fetchLayout();
  // console.log("LAYOUT", layout);
  return (
    <html lang="el">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
