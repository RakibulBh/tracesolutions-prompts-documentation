"use client";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { useState } from "react";

const MainBody = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
      <main className="flex flex-1 h-0">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <section className="flex-1 overflow-y-auto w-full">{children}</section>
      </main>
    </>
  );
};

export default MainBody;
