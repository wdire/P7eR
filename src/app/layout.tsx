import type {Metadata} from "next";
import {Public_Sans} from "next/font/google";
import "./globals.css";
import {cn} from "./_helpers/cn";

const public_sans = Public_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-public_sans",
});

export const metadata: Metadata = {
  title: "WYSIWYG Text Editor",
  description: "WYSIWYG Text Editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(public_sans.variable)}>
      <body>{children}</body>
    </html>
  );
}
