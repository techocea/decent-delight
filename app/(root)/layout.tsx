import type { Metadata } from "next";
import { Lora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Decent Delight",
  description: "Decadence Redefined",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
