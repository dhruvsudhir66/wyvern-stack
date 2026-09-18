import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Wyvernstack | Digital Technology Studio",

  description:
    "Learn about Wyvernstack, a digital technology studio building websites, SaaS products, digital platforms, and intelligent systems for businesses.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Wyvernstack | Digital Technology Studio",

    description:
      "Learn about Wyvernstack, a digital technology studio building websites, SaaS products, digital platforms, and intelligent systems for businesses.",

    url: "/about",

    siteName: "Wyvernstack",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "About Wyvernstack | Digital Technology Studio",

    description:
      "Learn about Wyvernstack, a digital technology studio building websites, SaaS products, digital platforms, and intelligent systems for businesses.",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
