import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import GlobalFooter from "@/components/global-footer";

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
      <body>
        <Navbar />
        {children}
        <GlobalFooter />
      </body>
    </html>
  );
}