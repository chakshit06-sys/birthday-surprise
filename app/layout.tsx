import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Little Birthday Surprise ✨",
  description: "A tiny birthday surprise made with good vibes.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}