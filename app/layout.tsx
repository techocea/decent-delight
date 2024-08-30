import React from "react";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";

import type { Metadata } from "next";
import "./globals.css";

import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

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
          "min-h-screen  antialiased",
          lora.className
        )}
      >
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        {children}
      </body>
    </html>
  );
}
