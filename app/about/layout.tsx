import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Wyvernstack",
  description:
    "Learn how WYVERNSTACK combines strategy, design, and engineering to build scalable digital products.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}