"use client";

import React from "react";
import { Card, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { Trash } from "lucide-react";
import QuantityButtons from "./QuantityButtons";
import { useRouter } from "next/navigation";
import useStore from "@/store/store";

interface iAppProps {
  mode: "checkout" | "cart-page";
}

const DisplayCartItems = ({ mode }: iAppProps) => {
  const router = useRouter();
  const { items, deleteCardProduct, getTotalPrice } = useStore();
  const totalPrice = getTotalPrice();

  return (
    <Card className="bg-white p-6 font-sans flex flex-col gap-4">
      <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
      <div className="flex-1 max-h-84 h-full overflow-y-scroll border-t border-b">
        {items.map(({ product, quantity }) => (
          <div
            key={product.id}
            className="flex gap-4 py-4 pr-4 border-b last:border-b-0"
          >
            <div className="w-36 h-24 shrink-0 bg-gray-100 rounded-md overflow-hidden">
              <Image
                src={product.imageUrl}
                width={144}
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
      </div>

      <CardFooter className="flex-col gap-4 p-0">
        <div className="flex items-center justify-between w-full font-medium mt-2">
          <p>Grand Total:</p>
          <p>Rs {new Intl.NumberFormat("en-US").format(totalPrice)}</p>
        </div>

        {mode === "cart-page" && (
          <div className="w-full">
            <Button
              onClick={() => router.push("/checkout")}
              className="w-full rounded-none"
            >
              Proceed to checkout
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default DisplayCartItems;
