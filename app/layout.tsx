import type { Metadata } from "next";
import "./globals.css";
import MainBody from "@/components/main-body";

export const metadata: Metadata = {
  title: "AI Tools Docs for Trace Solutions",
  description:
    "Documentation site for AI Tools to generate test cases for Trace Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="antialiased h-full flex flex-col">
        <MainBody>{children}</MainBody>
      </body>
    </html>
  );
}
