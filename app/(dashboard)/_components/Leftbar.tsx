"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { navLinks } from "@/lib/constants";
import { UserButton } from "@clerk/nextjs";

export default function Leftbar() {
    const pathname = usePathname();
    return (
        <div className="h-full left-0 top-0 p-10 sticky bg-secondary-100 flex flex-col items-center gap-16 shadow-xl max-lg:hidden">
            <Image
                src="/logo.png"
                width={150}
                height={100}
                alt="online cake shops in Negombo"
            />

            <div className="flex flex-col gap-12">
                {navLinks.map((link, idx) => (
                    <Link
                        href={link.url}
                        key={idx}
                        className={`flex gap-4 text-body-medium ${pathname === link.url ? "text-primary" : " text-secondary"}`}
                    >
                        {link.icon} <p>{link.label}</p>
                    </Link>
                ))}
            </div>

            <div className="flex gap-4 text-body-medium items-center">
                <UserButton />
                <p>Edit Profile</p>
            </div>
        </div>
    );
}
