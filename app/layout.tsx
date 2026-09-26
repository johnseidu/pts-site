import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paaloving Tech Solutions | IT Infrastructure & Smart Security, Ghana",
  description:
    "Certified Starlink installation, solar-powered CCTV, smart gate automation, and enterprise IT infrastructure across Ghana. Book a free site survey today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0B192C] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
