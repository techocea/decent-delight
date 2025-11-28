"use client";

import React from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import useStore, { Product } from "@/store";
import toast from "react-hot-toast";
import QuantityButtons from "./QuantityButtons";

interface iAppProps {
  product: Product;
}

const AddToCartButton = ({ product }: iAppProps) => {
  const { addItem, getItemCount } = useStore();
  const itemCount = getItemCount(product.id);

  const handleAddToCart = () => {
    addItem(product);
    toast.success(`${product.name} added to cart!`);
  };



  return (
    <div className="w-fit h-12 flex items-center">
      {itemCount ? (
        <QuantityButtons product={product}/>
      ) : (
        <Button
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
