import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Wyvernstack",
  description:
    "Learn how WYVERNSTACK combines strategy, design, and engineering to build scalable digital products.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}