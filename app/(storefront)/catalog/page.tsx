import React from "react";
import { PRODUCTS } from "@/lib/constants";
import ProductCard from "@/components/storefront/ProductCard";

const Catalog = () => {
  return (
    <div className="lg:max-w-6xl xl:max-w-5xl w-full mx-auto lg:py-16 lg:px-4 p-4">
      <div className="flex items-center justify-center">
        <h1 className="font-bold text-2xl lg:text-3xl text-primary">
          Catalogue Page
        </h1>
      </div>
      <div className="mt-10 grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 w-full gap-2">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
