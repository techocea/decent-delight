"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { HeartIcon, StarIcon, Plus, Minus, ShoppingCart } from "lucide-react";

interface ProductDetailsProps {
  data: {
    category: string;
    name: string;
    price: number;
    description: string;
  };
}

const ProductDetailsCard = ({ data }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleSelectSize = (size: string) => {
    setSelectedSize(size);
  };

  const handleCheckout = () => {
    // Add your checkout logic here
    console.log({
      product: data.name,
      quantity: quantity,
      totalPrice: data.price * quantity,
      selectedSize,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs text-primary-500 uppercase tracking-wider">
          {data.category.replaceAll("_", " ")}
        </p>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mt-1">
              {data.name}
            </h1>
            <div className="flex items-center gap-4 mt-2">
              <p className="text-2xl font-semibold text-gray-600">Rs {data.price}</p>
              <div className="flex items-center gap-1">
                <StarIcon className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span className="text-sm text-gray-600">(4.8)</span>
              </div>
            </div>
          </div>
          <div className="">
            <HeartIcon className="h-6 w-6 text-black bg-transparent" />
          </div>
        </div>
      </div>

      <div className="border-t border-b py-4">
        <p className="text-gray-600">{data.description}</p>
      </div>

      {/* Size Selection */}
      <div className="w-fit">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Size
        </label>
        <div className="grid grid-cols-3 gap-3">
          {["S", "M", "L"].map((size) => (
            <button
              key={size}
              onClick={() => handleSelectSize(size)}
              className={`border rounded-full items-center justify-center w-8 h-8 text-sm ${
                selectedSize === size ? "bg-black text-white" : null
              } hover:bg-black hover:text-white focus:border-primary-500`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Allergen Information */}
      <div>
        <h3 className="text-sm font-medium text-gray-700">
          Allergen Information
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Contains: Eggs, Milk, Wheat, Nuts
        </p>
      </div>

      {/* Quantity Control */}
      <div className="flex items-center justify-between"></div>

      {/* Action Buttons */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* <div className="flex items-center border rounded-md">
          <button onClick={decreaseQuantity} className="p-2 hover:bg-gray-100">
            <Minus className="h-4 w-4" />
          </button>
          <span className="px-4 py-2">{quantity}</span>
          <button onClick={increaseQuantity} className="p-2 hover:bg-gray-100">
            <Plus className="h-4 w-4" />
          </button>
        </div> */}
        <Button
          className="bg-black hover:bg-black/80 flex gap-2"
          onClick={handleCheckout}
        >
          <ShoppingCart className="h-5 w-5" />
          Add to Cart
        </Button>
        <Button
          className="bg-transparent text-black border-2 border-black hover:bg-black flex gap-2"
          onClick={handleCheckout}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
