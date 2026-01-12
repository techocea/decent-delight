"use client";

import React, { useState } from "react";
import CheckoutForm from "@/components/storefront/CheckoutForm";
import DisplayCartItems from "@/components/storefront/DisplayCartItems";
import { redirect, useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { CheckoutSchemaType } from "@/lib/zodSchemas";
import useStore from "@/store/store";
import toast from "react-hot-toast";

const CheckoutPage = () => {
  const router = useRouter();
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    redirect("/sign-in");
  }

  const cart = useStore.getState().items;

  const clearCart = () => {
    useStore.getState().resetCart();
  };

  const handleSubmit = async (data: CheckoutSchemaType) => {
    try {
      // 1️⃣ Always create the order first
      const res = await fetch("/api/checkout", {
        method: "POST",
        body: JSON.stringify({
          cart,
          addresses: data,
          paymentMode: data.paymentMode,
        }),
      });

      const result = await res.json();

      if (!result.success) {
        toast.error("Failed to create order");
        return;
      }

      const orderId = result.orderId;
      console.log(orderId);

      if (data.paymentMode === "cash") {
        clearCart();
        router.push("/order/summary");
      } else if (data.paymentMode === "online") {
        const firstProduct = cart[0].product;
        const checkoutUrl = `https://${process.env.LEMONSQUEEZY_STORE}.lemonsqueezy.com/checkout/buy/${firstProduct.lemonVariantId}?custom_data[order_id]=${orderId}`;

        clearCart();
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.error("Error in checking out:", error);
      toast.error("Failed to checkout");
    }
  };

  return (
    <div className="lg:max-w-6xl xl:max-w-5xl w-full mx-auto lg:px-4 p-4 min-h-screen py-12 px-4">
      <div>
        <h1 className="font-sans text-3xl font-bold mb-8 text-center w-full">
          Checkout Page
        </h1>
        <div className="font-sans grid grid-cols-1 md:grid-cols-2 gap-4">
          <CheckoutForm handleSubmit={handleSubmit} />

          <DisplayCartItems mode="checkout" />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
