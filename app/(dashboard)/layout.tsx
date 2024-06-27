import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import LeftBar from "./_components/Leftbar";
import Topbar from "./_components/Topbar";

import { ClerkProvider } from "@clerk/nextjs";
import ToastProvider from "@/lib/toatProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Deceent Delight - Admin Dashboard",
    description: "Admin dashboard to manage Decent Delight's data",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <ToastProvider />
                    <div className="flex max-sm:flex-col">
                        <LeftBar />
                        <Topbar />
                        <div className="flex-1">{children}</div>
                    </div>
                </body>
            </html>
        </ClerkProvider>
    );
}
