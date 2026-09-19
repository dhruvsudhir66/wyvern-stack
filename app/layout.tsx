import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://wyvernstack.com";

const isProduction = process.env.NEXT_PUBLIC_SITE_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Wyvernstack | Digital Products, Websites & SaaS",
    template: "%s | Wyvernstack",
  },

  description:
    "Wyvernstack is a digital technology studio building high-performance websites, SaaS products, platforms, and intelligent digital experiences for businesses.",

  robots: isProduction
    ? {
        index: true,
        follow: true,
      }
    : {
        index: false,
        follow: false,
      },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Wyvernstack | Digital Products, Websites & SaaS",
    description:
      "Wyvernstack is a digital technology studio building high-performance websites, SaaS products, platforms, and intelligent digital experiences for businesses.",
    url: siteUrl,
    siteName: "Wyvernstack",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Wyvernstack | Digital Products, Websites & SaaS",
    description:
      "Wyvernstack is a digital technology studio building high-performance websites, SaaS products, platforms, and intelligent digital experiences for businesses.",
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
