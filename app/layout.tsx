import type { Metadata } from "next";
import { Instrument_Serif, Lora, Inter } from "next/font/google";
import "./globals.css";

const heading = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

const body = Lora({
  subsets: ["latin"],
  variable: "--font-body",
});

const menu = Inter({
  subsets: ["latin"],
  variable: "--font-menu",
});

export const metadata: Metadata = {
  title: "Maison de Lia",
  description: "Luxury Floral Atelier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} ${menu.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}