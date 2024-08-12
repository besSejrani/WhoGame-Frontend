// Font
import { Inter as FontSans } from "next/font/google";

// Layout
import GameLayout from "@Layout/GameLayout";

// ==========================================================================================

const inter = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function GameLayoutGlobal({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GameLayout>{children}</GameLayout>;
      </body>
    </html>
  );
}
