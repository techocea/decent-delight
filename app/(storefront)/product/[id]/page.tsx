import { addItem } from "@/app/actions";
import prisma from "@/app/lib/db";
import FeaturedProducts from "@/components/storefront/FeaturedProducts";
import ImageGallery from "@/components/storefront/ImageGallery";

import { ShoppingBagButton } from "@/components/ui/submit-button";
import { StarIcon } from "lucide-react";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

async function getData(productId: string) {
  const data = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    select: {
      id: true,
      name: true,
      description: true,
      price: true,
      images: true,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

export default async function SingleProductPage({
  params,
}: {
  params: { id: string };
}) {
  noStore();
  const data = await getData(params.id);
  const addProductToCart = addItem.bind(null, data.id);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start lg:gap-24 py-16 px-4">
        <ImageGallery images={data.images} />
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-primary">
            {data.name}
          </h1>
          <p className="font-semibold text-xl mt-2">Rs {data.price}</p>
          <div className="mt-3 flex items-center gap-1">
            <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          </div>
          <p className="mt-6 text-base text-gray">{data.description}</p>

          <form action={addProductToCart}>
            <ShoppingBagButton />
          </form>
        </div>
      </div>

      <div>
        <FeaturedProducts />
      </div>
    </>
  );
}
