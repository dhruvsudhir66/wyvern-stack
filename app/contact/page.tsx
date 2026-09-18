import type { Metadata } from "next";

import Navbar from "@/app/components/Navbar";
import Contact from "@/app/components/Contact";

export const metadata: Metadata = {
  title: "Contact Wyvernstack | Start a Digital Project",
  description:
    "Start a project with Wyvernstack. Get in touch about websites, SaaS products, digital platforms, web applications, and AI-powered solutions.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Wyvernstack | Start a Digital Project",
    description:
      "Start a project with Wyvernstack. Get in touch about websites, SaaS products, digital platforms, web applications, and AI-powered solutions.",
    url: "/contact",
    siteName: "Wyvernstack",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Wyvernstack | Start a Digital Project",
    description:
      "Start a project with Wyvernstack. Get in touch about websites, SaaS products, digital platforms, web applications, and AI-powered solutions.",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-mesh font-sans">
      <Navbar />

      <div className="pt-24">
        <Contact />
      </div>
    </main>
  );
}
