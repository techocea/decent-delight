"use client";

import React from "react";
import Image from "next/image";
import useStore from "@/store/store";
import { Trash } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import QuantityButtons from "./QuantityButtons";
import { cn } from "@/lib/utils";

interface iAppProps {
  mode: "checkout" | "cart-page";
}

const DisplayCartItems = ({ mode }: iAppProps) => {
  const router = useRouter();
  const { items, deleteCardProduct, getTotalPrice } = useStore();
  const totalPrice = getTotalPrice();

  return (
    <div
      className={cn(
        mode === "checkout" ? "border rounded-lg" : "border-none rounded-none",
        "p-6 w-full bg-white"
      )}
    >
      <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
      <div className="flex-1 h-full border-gray-500/50 border-t">
        {items.map(({ product, quantity }) => (
          <div
            key={product.id}
            className="flex gap-4 py-4 pr-4 border-gray-500/50 border-b last:border-b-0"
          >
            <div className="w-24 h-24 shrink-0 bg-gray-100 rounded-md overflow-hidden">
              <Image
                src={product.imageUrl}
                width={96}
                height={96}
                className="object-cover w-full h-full"
                alt={product.name}
              />
            </div>

            <div className="flex flex-col justify-between w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-sm text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{product.weight}</p>
                </div>

                <Button
                  size="sm"
                  onClick={() => deleteCardProduct(product.id)}
                  className="bg-red-500 text-red-200 hover:bg-red-500/20 hover:text-red-600 text-xs font-medium self-start"
                >
                  <Trash />
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <QuantityButtons product={product} />
                <p className="font-semibold text-sm">
                  Rs{" "}
                  {new Intl.NumberFormat("en-US").format(
                    product.price * quantity
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-4 mt-4">
          <div className="flex items-center justify-between w-full font-medium pt-2 pr-4">
            <h3 className="text-lg font-semibold">Grand Total:</h3>
            <p className="text-base">
              Rs {new Intl.NumberFormat("en-US").format(totalPrice)}
            </p>
          </div>
          <div className="flex items-center justify-between w-full pr-4">
            <h3 className="text-sm font-semibold text-muted-foreground">Delivery Fee:</h3>
            <p className="text-sm font-medium text-muted-foreground">
              Rs 0
            </p>
          </div>

          {mode === "cart-page" && (
            <div className="w-full mt-4">
              <Button
                onClick={() => router.push("/checkout")}
                className="w-full rounded-none"
              >
                Proceed to checkout
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayCartItems;
