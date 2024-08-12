// Font
import { Inter as FontSans } from "next/font/google";

// Layout
import StartGameLayout from "@Layout/StartGameLayout";

// ==========================================================================================

const inter = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function StartGameLayoutGlobal({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StartGameLayout>{children}</StartGameLayout>
      </body>
    </html>
  );
}
