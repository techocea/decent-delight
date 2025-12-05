import Footer from "@/components/storefront/Footer";
import Navbar from "@/components/storefront/Navbar";
import { type ReactNode } from "react";

export default function IndexLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
