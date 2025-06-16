"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS } from "@/lib/constants";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
// import { redis } from "@/app/lib/redis";
// import { Cart } from "@/lib/interface";
import MobileNav from "./MobileNav";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  // const cart: Cart | null = await redis.get(`cart-${user?.id}`);
  // const total = cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;

  const [openDropdown, setOpenDropdown] = useState("");

  return (
    <div className="relative">
      <header className="bg-accent lg:max-w-7xl flex items-center h-16 justify-between w-full px-4 lg:py-6 lg:px-8">
        <Link href="/">
          <Image
            src="/logo.png"
            width={231}
            height={60}
            className="max-md:w-2/3"
            alt="Decent Delight"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6">
          <ul className="flex space-x-6 relative">
            {NAV_ITEMS.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() =>
                  item.children && setOpenDropdown(item.label)
                }
                onMouseLeave={() => item.children && setOpenDropdown("")}
                className="relative group cursor-pointer"
              >
                <div className="flex items-center space-x-1 text-gray-800 hover:text-[#1E3A8A] font-medium">
                  <a href={item.href}>{item.label}</a>
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </div>

                {/* Dropdown */}
                {item.children && (
                  <div
                    className={clsx(
                      "absolute left-0 top-full -mt-1 w-48 z-50 bg-white shadow-lg rounded-lg py-2 transition-opacity",
                      openDropdown === item.label
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    )}
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown("")}
                  >
                    {item.children.map((child, idx) => (
                      <a
                        key={idx}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 justify-between">
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {/* <MobileNav /> */}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
