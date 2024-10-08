import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import "@/app/globals.css";

// ==========================================================================================

const inter = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
