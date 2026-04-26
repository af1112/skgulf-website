import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sk-gulf.com"),
  title: {
    default: "SK-GULF INTEGRATED LLC | Engineering & Technology",
    template: "%s | SK-GULF",
  },
  description:
    "SK-GULF INTEGRATED LLC is a 100% Omani company delivering oil and gas contracting, renewable energy, AI technologies, and sustainability-led innovation across the Middle East.",
  applicationName: "SK-GULF",
  keywords: [
    "SK-GULF",
    "SK Gulf",
    "engineering",
    "oil and gas",
    "renewable energy",
    "AI",
    "Automation",
    "design",
    "construction",
    "decoration",
    "Engineering",
    "software development",
    "asset integrity",
    "Oman",
    "contracting",
    "smart monitoring",
    "carbon capture",
  ],
  openGraph: {
    title: "SK-GULF INTEGRATED LLC | Engineering & Technology",
    description:
      "Integrated engineering, contracting, and technology solutions for Oil & Gas, Renewables, AI, and Smart Asset Integrity.",
    url: "https://sk-gulf.com",
    siteName: "SK-GULF",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SK-GULF INTEGRATED LLC | Engineering & Technology",
    description:
      "Integrated engineering, contracting, and technology solutions for Oil & Gas, Renewables, AI, and Smart Asset Integrity.",
  },
  alternates: {
    canonical: "https://sk-gulf.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      { url: "/apple-icon.png?v=2", type: "image/png", sizes: "180x180" },
      { url: "/images/logo.webp?v=2", type: "image/webp", sizes: "96x96" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-icon.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${notoArabic.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SK-GULF INTEGRATED LLC",
              "url": "https://sk-gulf.com",
              "logo": "https://sk-gulf.com/images/logo.webp",
              "description": "SK-GULF INTEGRATED LLC is a 100% Omani company delivering oil and gas contracting, renewable energy, AI technologies, and sustainability-led innovation.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Muscat",
                "addressCountry": "Oman"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+968-XXXX-XXXX",
                "contactType": "customer service"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
