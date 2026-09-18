import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design & Development Portfolio",
  description:
    "Explore websites, digital products, business platforms, and immersive web experiences designed and developed by Wyvernstack.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Web Design & Development Portfolio | Wyvernstack",
    description:
      "Explore websites, digital products, business platforms, and immersive web experiences designed and developed by Wyvernstack.",
    url: "/work",
    siteName: "Wyvernstack",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Development Portfolio | Wyvernstack",
    description:
      "Explore websites, digital products, business platforms, and immersive web experiences designed and developed by Wyvernstack.",
  },
};

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
