import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/ui/SmothScroll";
import React from "react";

export const dynamic = "force-dynamic";


const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <SmoothScroll>
        <main className="flex-1">{children}</main>
      </SmoothScroll>
      <Footer />
    </div>
  );
};

export default RootLayout;
