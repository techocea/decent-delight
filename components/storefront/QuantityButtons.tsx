"use client";

import React from "react";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";
import useStore, { Product } from "@/store";

interface iAppProps {
  product: Product;
}

const QuantityButtons = ({ product }: iAppProps) => {
  const { addItem, removeItem, getItemCount } = useStore();
  const itemCount = getItemCount(product.id);

  const handleAddToCart = () => {
    addItem(product);
  };

  const handleRemoveItem = () => {
    removeItem(product.id);
  };

  return (
    <div className="flex items-center justify-center gap-1.5">
      <Button
        onClick={handleRemoveItem}
        size="sm"
        className="rounded-sm w-8 h-8 bg-transparent shadow-sm text-black hover:text-white"
      >
        <Minus />
      </Button>
      <Button
        size="sm"
        className="rounded-sm w-8 h-8 bg-transparent shadow-sm text-black hover:text-white"
      >
        {itemCount}
      </Button>
      <Button
        onClick={handleAddToCart}
        size="sm"
        className="rounded-sm w-8 h-8 bg-transparent shadow-sm text-black hover:text-white"
      >
        <Plus />
      </Button>
    </div>
  );
};

export default QuantityButtons;
