import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import GlobalFooter from "@/components/global-footer";

export const metadata: Metadata = {
  title: "VYBS - Private Messaging, Vibe Freely",
  description:
    "Message privately. Vibe freely. VYBS is fast, secure messaging built for your circle. End-to-end encrypted, no ads, no clutter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <GlobalFooter />
      </body>
    </html>
  );
}