import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development, AI & Digital Technology Services",
  description:
    "Wyvernstack provides web platform development, AI integration, design systems, and edge infrastructure services for businesses building modern digital products.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Web Development, AI & Digital Technology Services | Wyvernstack",
    description:
      "Web platforms, AI integration, design systems, and performance-focused infrastructure for modern businesses.",
    url: "/services",
    siteName: "Wyvernstack",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development, AI & Digital Technology Services | Wyvernstack",
    description:
      "Web platforms, AI integration, design systems, and performance-focused infrastructure for modern businesses.",
  },
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
