"use client";
import React, { useState } from "react";

import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { MenuIcon, X } from "lucide-react";

export default function MobileNav() {
  const [showNav, setShowNav] = useState(false);

  const handleMobileNav = () => {
    setShowNav(!showNav);
  };
  return (
    <>
      <div
        className="lg:hidden w-10 h-10 flex text-primary items-center justify-center cursor-pointer"
        onClick={handleMobileNav}
      >
        {!showNav ? <MenuIcon size={32} /> : <X size={32} />}
      </div>

      {showNav && (
        <nav className="absolute top-16 z-10 left-0 w-full bg-accent shadow-md lg:hidden">
          <ul className="flex flex-col items-center py-4">
            {/* {NAV_ITEMS.map((item) => (
              <li key={item.label} className="mb-4">
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))} */}
          </ul>
        </nav>
      )}
    </>
  );
}
