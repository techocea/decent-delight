import React from "react";
// @ts-ignore: No type declarations for CSS import
import "@/app/globals.css";
import Script from "next/script";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { ourFileRouter } from "./api/uploadthing/core";
import { extractRouterConfig } from "uploadthing/server";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { Toaster } from "react-hot-toast";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

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
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
