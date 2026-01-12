import React from "react";
import ProductCard from "@/components/storefront/ProductCard";
import { db } from "@/lib/db";
import { products } from "@/lib/schema";
import { unstable_noStore as noStore } from "next/cache";

async function getData() {
  const data = await db.select().from(products);
  return data;
}

const Catalog = async () => {
  noStore();
  const data = await getData();

  return (
    <div className="lg:max-w-6xl xl:max-w-5xl w-full mx-auto lg:py-16 lg:px-8 sm:px-6 px-4 py-10">
      <div className="flex items-center justify-center">
        <h1 className="font-bold text-2xl lg:text-3xl text-primary tracking-wider">
          Catalogue Page
        </h1>
      </div>
      <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-6">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
