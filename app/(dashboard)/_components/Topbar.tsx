"use client";

import { navLinks } from "@/lib/constants";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Topbar() {
    const [dropDownMenu, setDropDownMenu] = useState(false);
    const pathname = usePathname();
    return (
        <div className="sticky top-0 z-10 h-full bg-secondary-100 flex items-center justify-between py-4 px-8 w-full shadow-xl lg:hidden">
            <Image
                src="/logo.png"
                width={150}
                height={100}
                alt="online cake shops in Negombo"
            />

            <div className="flex gap-8 max-md:hidden">
                {navLinks.map((link, idx) => (
                    <Link
                        href={link.url}
                        key={idx}
                        className={`flex gap-4 text-body-medium ${pathname === link.url ? "text-primary" : " text-secondary"}`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            <div className="relative flex gap-4 text-body-medium items-center">
                <Menu
                    className="cursor-pointer md:hidden"
                    onClick={() => setDropDownMenu(!dropDownMenu)}
                />
                {dropDownMenu && (
                    <div className="absolute top-10 right-6 p-5 bg-white shadow-xl rounded-lg flex flex-col gap-8">
                        {navLinks.map((link, idx) => (
                            <Link
                                href={link.url}
                                key={idx}
                                className="flex gap-4 text-body-medium text-primary"
                            >
                                {link.icon} <p>{link.label}</p>
                            </Link>
                        ))}
                    </div>
                )}
                <UserButton />
            </div>
        </div>
    );
}
