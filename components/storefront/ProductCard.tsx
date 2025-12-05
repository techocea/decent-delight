"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/store/store";
import { Skeleton } from "../ui/skeleton";
import { useRouter } from "next/navigation";
import AddToCartButton from "./AddToCartButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface iAppProps {
  product: Product;
}

export default function ProductCard({ product }: iAppProps) {
  const router = useRouter();

  return (
    <Card
      onClick={() => router.push(`/product/${product.id}`)}
      className="rounded-none bg-white shadow-lg cursor-pointer hover:shadow-2xl"
    >
      <CardHeader className="items-center text-center py-4">
        <CardTitle className="text-sm sm:text-base">{product.name}</CardTitle>
        <p className="text-xs sm:text-sm font-sans">{product.weight}</p>
      </CardHeader>
      <CardContent className="w-full h-40 sm:h-50vh lg:h-[220px] flex items-center justify-center">
        <Image
          src={product.imageUrl}
          width={200}
          height={180}
          alt={product.name}
          className="object-center aspect-square w-24 sm:w-32 lg:w-[200px] h-auto"
        />
      </CardContent>
      <div className="max-sm:flex-col-reverse flex gap-2 w-full items-center p-4 sm:p-6 justify-between">
        <AddToCartButton mode="catalog" product={product} />
        <p className="font-semibold text-base sm:text-sm text-primary">
          Rs {product.price}
        </p>
      </div>
    </Card>
  );
}

export function LoadingProductCard() {
  return (
    <div className="flex flex-col">
      <Skeleton className="w-full h-40 sm:h-[330px]" />
      <div className="flex flex-col mt-2 gap-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="w-6 h-full" />
      </div>
      <Skeleton className="w-full h-10 mt-5" />
    </div>
  );
}
