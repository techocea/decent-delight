import type { Metadata } from "next";
import "./globals.css";

import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";

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
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          lora.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
