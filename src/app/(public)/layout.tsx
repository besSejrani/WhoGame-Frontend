// CSS
import "@/app/globals.css";

// Layout
import PublicLayout from "@Layout/PublicLayout";

// Types
import type { Metadata } from "next";

// ==========================================================================================

export const metadata: Metadata = {
  title: "Who Is RAG | tecRacer",
  description:
    "Dive into the mistery! Can you figure out who's who? Ask smart questions, use your detectives skills to narrow down the options, and make your guess.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PublicLayout>{children}</PublicLayout>;
}
