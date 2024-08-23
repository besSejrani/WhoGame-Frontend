// CSS
import "@/app/globals.css";

// Layout
import AdminLayout from "@Layout/AdminLayout";

// Providers
import Providers from "../providers";

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
  return (
    <Providers>
      <AdminLayout>{children}</AdminLayout>
    </Providers>
  );
}
