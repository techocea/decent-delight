import Footer from "@/components/storefront/Footer";
import Navbar from "@/components/storefront/Navbar";

import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export default function IndexLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className={cn("max-w-7xl mx-auto")}>{children}</main>
      <Footer />
    </>
  );
}
