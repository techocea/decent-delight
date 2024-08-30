"use client";

import React, { useState } from "react";
import Link from "next/link";

import { SearchIcon, ShoppingBagIcon, User } from "lucide-react";
import { useRouter } from "next/navigation";

import CartModal from "./MobileNav";
import inter from "@/lib/fonts";

const NavIconBar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const router = useRouter();

  //Temporary
  const isLoggedIn = false;

  const handleClickProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };

  const handleClickCart = () => {
    setIsCartOpen((prev) => !prev);
  };
  return (
    <div className="relative flex gap-4 items-center justify-center">
      <SearchIcon/>
      <User
        className="text-primary cursor-pointer"
        onClick={handleClickProfile}
      />
      {isProfileOpen && (
        <div className="absolute top-12 right-8 flex flex-col gap-4 bg-white w-fit p-4 rounded-lg">
          <Link href="/">Profile</Link>
          <Link href="/">Logout</Link>
        </div>
      )}
      <div className="relative">
        <ShoppingBagIcon className="text-primary cursor-pointer" onClick={handleClickCart} />
        <div
          className={`${inter.className} flex items-center justify-center absolute -top-4 -right-4 bg-red-500 rounded-full w-6 h-6 text-white`}
        >
          2
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIconBar;
