import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sk-gulf.com"),
  title: {
    default: "SK Gulf Integrated LLC | Contracting, Consulting, R&D",
    template: "%s | SK Gulf",
  },
  description:
    "SK Gulf Integrated LLC is a 100% Omani company established in 2020, delivering oil and gas contracting, renewable energy solutions, AI technologies, and sustainability-led innovation.",
  applicationName: "SK Gulf Website",
  keywords: [
    "SK Gulf",
    "industrial services",
    "infrastructure",
    "engineering",
    "contracting",
    "oman",
    "renewable energy",
    "oil and gas",
    "carbon capture",
  ],
  openGraph: {
    title: "SK Gulf Integrated LLC | Contracting, Consulting, R&D",
    description:
      "Oil and gas, renewables, AI technologies, and specialized industrial services delivered with safety and sustainability at the core.",
    url: "https://sk-gulf.com",
    siteName: "SK Gulf",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SK Gulf Integrated LLC | Contracting, Consulting, R&D",
    description:
      "Oil and gas, renewables, AI technologies, and specialized industrial services delivered with safety and sustainability at the core.",
  },
  alternates: {
    canonical: "https://sk-gulf.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfairDisplay.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
