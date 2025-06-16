import Image from "next/image";

import { Button } from "../ui/button";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

interface iAppProps {
  item: {
    id: string;
    name: string;
    price: number;
    images: string[];
    description?: string;
  };
}

export default function ProductCard({ item }: iAppProps) {
  return (
    <div className="rounded-lg overflow-hidden group transition-transform duration-300 cursor-pointer hover:shadow-lg">
      <div className="relative">
        {item.images.map((item, index) => (
          <div key={index} className="overflow-hidden">
            <div className="relative h-[250px] w-full">
              <Image
                src={item}
                className="object-cover object-center w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-110"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0}
                alt="Cake Image"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="py-4 px-1.5 bg-white">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <h1 className="font-semibold text-lg text-gray-800">{item.name}</h1>
          <h3 className="text-sm font-bold text-primary">
            Rs {item.price.toLocaleString()}
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-2 mt-4 w-full">
          <Button
            className="w-full transition-colors bg-primary/10 hover:bg-primary/20 text-primary"
            asChild
          >
            <Link href={`/cart/add/${item.id}`}>Add to Cart</Link>
          </Button>
          <Button
            className="w-full transition-colors hover:bg-primary/90"
            asChild
          >
            <Link href={`/product/${item.id}`}>Buy Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function LoadingProductCard() {
  return (
    <div className="flex flex-col">
      <Skeleton className="w-full h-[330px]" />
      <div className="flex flex-col mt-2 gap-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="w-6 h-full" />
      </div>
      <Skeleton className="w-full h-10 mt-5" />
    </div>
  );
}
