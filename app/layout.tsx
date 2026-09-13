import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vidhilifebloom.com"),
  title: {
    default: "VIDHI LIFEBLOOM HEALTHCARE | Home Care, Health Card & Corporate Audit",
    template: "%s | VIDHI LIFEBLOOM HEALTHCARE"
  },
  description:
    "Integrated healthcare network unifying certified bedside nursing care, subsidized health membership privilege cards, and forensic insurance claims investigation.",
  keywords: [
    "home nursing care",
    "elderly care services",
    "physiotherapy at home",
    "health discount card",
    "hospital bill discount",
    "insurance claims investigation",
    "forensic medical auditing",
    "NABH consultancy",
    "Vidhi Lifebloom Healthcare"
  ],
  authors: [{ name: "VIDHI LIFEBLOOM HEALTHCARE PRIVATE LIMITED" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.vidhilifebloom.com",
    title: "VIDHI LIFEBLOOM HEALTHCARE PRIVATE LIMITED",
    description: "Certified Bedside Nursing, Health Privilege Membership Cards & Forensic Claims Auditing across India.",
    siteName: "Vidhi Lifebloom Healthcare",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body className="flex flex-col min-h-screen">
        <div className="flex-grow">
          {children}
        </div>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}