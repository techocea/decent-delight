"use client";

import React from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import useStore, { Product } from "@/store/store";
import toast from "react-hot-toast";
import QuantityButtons from "./QuantityButtons";

interface iAppProps {
  product: Product;
  mode: "catalog" | "product-page";
}

const AddToCartButton = ({ product, mode }: iAppProps) => {
  const { addItem, getItemCount } = useStore();
  const itemCount = getItemCount(product.id);

  const handleAddToCart = () => {
    addItem(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="w-fit h-full flex items-center">
      {itemCount ? (
        <div className="flex flex-col gap-2">
          {mode === "product-page" && (
            <h3 className="font-sans text-lg font-semibold text-gray-700 pb-2">
              Select Quantity
            </h3>
          )}
          <QuantityButtons product={product} />
        </div>
      ) : (
        <Button
          size="default"
          onClick={handleAddToCart}
          className="rounded-none flex items-center justify-center gap-2"
        >
          Add To Cart <Plus />
        </Button>
      )}
    </div>
  );
};

export default AddToCartButton;
