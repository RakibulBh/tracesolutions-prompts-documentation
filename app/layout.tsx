import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

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
        <Navbar />
        <main className="flex flex-1 h-0">
          <Sidebar />
          <section className="flex-1 overflow-y-auto">{children}</section>
        </main>
      </body>
    </html>
  );
}
