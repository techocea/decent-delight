"use client";

import useStore, { Product } from "@/store/store";
import AddToCartButton from "./AddToCartButton";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const ProductDetailsCard = ({ data }: { data: Product }) => {
  const router = useRouter();
  const { getItemCount } = useStore();
  const quantity = getItemCount(data.id);

  return (
    <div className="space-y-6">
      <div>
        {/* <p className="text-xs text-primary-500 uppercase tracking-wider">
          {data.category.replaceAll("_", " ")}
        </p> */}
        <div className="flex items-start justify-between">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-3xl font-bold text-gray-900 mt-1">
              {data.name}
            </h1>
            <div className="flex items-center gap-4 mt-2">
              <p className="text-xl font-semibold text-gray-600">
                Rs {data.price}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="font-sans flex flex-col">
        <h3 className="text-lg font-semibold text-gray-700 pb-2">
          Description
        </h3>
        <Separator />
        <p className="text-gray-600 text-base leading-6 pt-3">
          {data.description}
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <AddToCartButton mode="product-page" product={data} />
        {quantity > 0 && (
          <>
            <Separator />
            <div className="flex flex-col gap-4">
              <div className="font-sans flex items-center justify-between w-full -mt-2">
                <h3 className="text-lg font-semibold text-gray-700 pb-2">
                  Grand Total :
                </h3>
                <p className="text-lg">Rs {data.price * quantity} </p>
              </div>

              <Button
                onClick={() => router.push("/checkout")}
                className="font-sans tracking-widest text-base uppercase w-full rounded-none"
              >
                Proceed to checkout
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsCard;
