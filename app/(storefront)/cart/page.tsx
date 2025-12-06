"use client";

import React from "react";
import Link from "next/link";
import useStore from "@/store/store";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBagIcon } from "lucide-react";
import DisplayCartItems from "@/components/storefront/DisplayCartItems";

const Cart = () => {
  const { items } = useStore();

  return (
    <div className="my-12 max-w-xl mx-auto flex items-center justify-center">
      {items.length === 0 ? (
        <Card className="max-w-lg mx-auto bg-white flex font-sans flex-col gap-2 items-center justify-center rounded-lg text-center mt-16 px-6 py-10">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <ShoppingBagIcon className="w-10 h-10 text-secondary" />
          </div>
          <h2 className="font-bold text-md">
            You don`t have any items in the bag
          </h2>
          <p className="text-sm my-2 text-gray-500">
            You currently don`t have any products in your shopping bag. Please
            add some so that you can see them right here.
          </p>
          <Button asChild className="rounded-none">
            <Link href="/catalog">Shop Now</Link>
          </Button>
        </Card>
      ) : (
        <DisplayCartItems mode="cart-page" />
      )}
    </div>
  );
};

export default Cart;
