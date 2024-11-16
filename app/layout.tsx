import React from "react";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";

import type { Metadata } from "next";
import "./globals.css";

import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import Script from "next/script";

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
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7909GX1DC6"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7909GX1DC6');`}
        </Script>
      </head>
      <body className={cn("min-h-screen  antialiased", lora.className)}>
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        {children}
      </body>
    </html>
  );
}
