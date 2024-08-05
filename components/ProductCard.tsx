import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "./ui/button";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            alt={product.name}
            className="aspect-square object-cover rounded"
            height={300}
            src={product.images![0]}
            width={400}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="flex justify-between w-full">
          <Link href={`/product/${product.slug}`}>
            <h2 className="text-sm font-medium">{product.name}</h2>
          </Link>
          <p>{product.price}</p>
        </div>
        <div className="w-full">
          <Button className="w-full">Add to Cart</Button>
        </div>
        {/* <div className="flex-between gap-4">
          <p>{product.rating} stars</p>
          {product.stock > 0 ? (
            <p className="font-bold">${product.price}</p>
          ) : (
            <p className="text-destructive">Out of Stock</p>
          )}
        </div> */}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
