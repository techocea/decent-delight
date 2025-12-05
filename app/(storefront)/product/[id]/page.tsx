import FeaturedProducts from "@/components/storefront/FeaturedProducts";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import ProductDetailsCard from "@/components/storefront/ProductDetailsCard";
import { db } from "@/lib/db";
import { products } from "@/lib/schema";
import { eq } from "drizzle-orm";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Dot } from "lucide-react";

async function getData(productId: string) {
  const data = await db
    .select()
    .from(products)
    .where(eq(products.id, productId))
    .limit(1);

  if (!data) {
    return notFound();
  }

  return data;
}

export default async function SingleProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  noStore();
  const awaitedParams = await params;
  const data = await getData(awaitedParams.id);

  const imageUrl = data[0].imageUrl;

  return (
    <div className="lg:py-16 lg:px-8 pb-32 sm:px-4 bg-white">
      <div className="lg:max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 py-8">
        <div className="flex flex-col gap-10">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              width={500}
              height={500}
              src={imageUrl}
              className="object-cover w-[500px] h-[500px]"
              alt="Single product image"
            />
          </div>

          {/* Allergen Information */}
          <div className="font-sans">
            <h3 className="text-lg font-semibold text-gray-700 pb-2">
              Description
            </h3>
            <Separator />

            <ul className="space-y-2 py-4">
              {data[0]?.additionalInfo.map((info, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <Dot size={32} className="shrink-0" />
                <span className="text-gray-600 text-base">{info}</span>
              </li>
              ))}
            </ul>

            <Separator />
          </div>
        </div>

        {/* Right side - Product Details */}
        <ProductDetailsCard data={data[0]} />
      </div>
    </div>
  );
}
