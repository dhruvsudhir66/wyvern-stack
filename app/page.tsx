import type { Metadata } from "next";

import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import Work from "@/app/components/Work";
import ContactPreview from "@/app/components/ContactPreview";
import Process from "@/app/components/Process";

export const metadata: Metadata = {
  title: "Digital Products, Websites & SaaS | Wyvernstack",

  description:
    "Wyvernstack is a digital technology studio building high-performance websites, SaaS products, digital platforms, and intelligent systems for businesses.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Digital Products, Websites & SaaS | Wyvernstack",
    description:
      "Wyvernstack is a digital technology studio building high-performance websites, SaaS products, digital platforms, and intelligent systems for businesses.",
    url: "/",
    siteName: "Wyvernstack",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Products, Websites & SaaS | Wyvernstack",
    description:
      "Wyvernstack is a digital technology studio building high-performance websites, SaaS products, digital platforms, and intelligent systems for businesses.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Wyvernstack",
  url: "https://wyvernstack.com",
  logo: "https://wyvernstack.com/icon.png",
  description:
    "Wyvernstack is a digital technology studio building websites, SaaS products, digital platforms, and intelligent systems for businesses.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <main className="min-h-screen overflow-hidden bg-mesh font-sans">
        <Navbar />
        <Hero />
        <Services />
        <Work />
        <Process />
        <ContactPreview />
      </main>
    </>
  );
}