"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { MenuIcon, X } from "lucide-react";
import NavIconBar from "./NavIconBar";
import { navLinks } from "@/lib/constants";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleMobileNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="bg-accent lg:max-w-7xl 2xl:max-w-screen-2xl w-full lg:py-4 lg:px-8 p-4">
      <div className="flex items-center justify-between w-full">
        <Link href="/">
          <Image
            src="/logo.png"
            width={231}
            height={60}
            className="max-md:w-2/3"
            alt="Decent Delight"
          />
        </Link>
        <nav className="hidden lg:flex gap-6">
          {navLinks.map((item) => (
            <Link href={item.url} key={item.label}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-4">
          <NavIconBar />

          {/* Mobile View */}
          <div
            className="lg:hidden w-10 h-10 flex text-primary items-center justify-center cursor-pointer ease-in duration-500"
            onClick={handleMobileNav}
          >
            {!showNav ? <MenuIcon size={32} /> : <X size={32} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
