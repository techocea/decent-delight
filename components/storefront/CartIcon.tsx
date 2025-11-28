"use client";

import useStore from "@/store";
import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  const { items } = useStore();

  return (
    <div className="relative">
      <Link href="/cart" className="flex items-center justify-center">
        <ShoppingBagIcon />
        <span className="absolute -top-3 -right-2 rounded-full bg-red-500 text-white w-5 h-5 font-sans text-xs flex items-center justify-center">
          {items?.length ? items?.length : 0}
        </span>
      </Link>
    </div>
  );
};

export default CartIcon;
