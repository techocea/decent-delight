"use client";

import React from "react";
import CheckoutForm from "@/components/storefront/CheckoutForm";
import DisplayCartItems from "@/components/storefront/DisplayCartItems";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import useStore from "@/store/store";
import { CheckoutSchemaType } from "@/lib/zodSchemas";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { addresses } from "@/lib/schema";

const CheckoutPage = () => {
  // const { isAuthenticated } = useKindeAuth();
  // console.log(isAuthenticated);
  // if (!isAuthenticated) {
  //   return redirect("/api/auth/register");
  // }

  const handleSubmit = async (data: CheckoutSchemaType) => {
    const cart = useStore.getState().items;

    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({ cart, addresses: data }),
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <div className="lg:max-w-6xl xl:max-w-5xl w-full mx-auto lg:py-16 lg:px-4 p-4 min-h-screen py-12 px-4">
      <div>
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="font-sans grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column - Checkout Form */}
          <CheckoutForm onSubmit={handleSubmit} />

          {/* Right Column - Cart Items */}
          <DisplayCartItems mode="checkout" />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
