import type {Metadata} from "next";
import {Public_Sans} from "next/font/google";
import "./globals.css";

const inter = Public_Sans({subsets: ["latin"], weight: ["200", "400", "500", "600"]});

export const metadata: Metadata = {
  title: "PTN-FE-Case WYSIWYG",
  description: "PTN-FE-Case WYSIWYG - Ramazan Öztürk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
