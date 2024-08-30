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
    <div className="rounded-lg">
      <div>
        {item.images.map((item, index) => (
          <div key={index}>
            <div className="relative h-[330px] w-full">
              <Image
                src={item}
                className="object-cover object-center w-full h-full rounded-lg"
                fill
                alt="Product Image"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-2">
        <h1 className="font-semibold text-xl">{item.name}</h1>
        <h3 className="inline-flex items-center rounded-md py-1 text-sm font-medium text-primary">
          Rs {item.price}
        </h3>
      </div>
      {/* <p className="text-gray-400 line-clamp-2">{item.description}</p> */}
      <Button className="w-full mt-2" asChild>
        <Link href={`/product/${item.id}`}>Buy Now</Link>
      </Button>
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
