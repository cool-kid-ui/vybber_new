import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VYBBER",
  description:
    "Truth-powered social. Learn, stay informed, discover music, and shop — all in one swipe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}