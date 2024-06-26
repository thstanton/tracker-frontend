import type { Metadata } from "next";
import { Inter, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const zen = Zen_Kaku_Gothic_New({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-zen",
});

export const metadata: Metadata = {
  title: "Cliki",
  description: "Simple Tracking Link Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} max-h-content flex min-h-screen flex-col bg-gradient-to-t from-stone-300 to-stone-50 bg-cover bg-fixed bg-center`}
      >
        <NavBar />
        <main className="flex grow flex-col items-center justify-center px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
