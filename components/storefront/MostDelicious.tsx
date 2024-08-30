import React from "react";
import prisma from "@/app/lib/db";

import ProductCard from "../storefront/ProductCard";

async function getData() {
  const data = await prisma.product.findMany({
    orderBy: {
      createdAt: "asc",
    },
    take: 4,
  });

  return data;
}

export default async function MostDelicious() {
  const data = await getData();

  return (
    <div className="lg:max-w-7xl mx-auto w-full lg:py-20 lg:px-24 py-16 px-4">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-2xl text-primary">Most Delicious</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-4 gap-8">
          {data.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
