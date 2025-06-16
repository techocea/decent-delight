import prisma from "@/app/lib/db";
import FeaturedProducts from "@/components/storefront/FeaturedProducts";
import ImageGallery from "@/components/storefront/ImageGallery";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import PlaceOrderButton from "@/components/storefront/PlaceOrderButton";
import ProductDetailsCard from "@/components/storefront/ProductDetailsCard";

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
      category: true,
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

  return (
    <div className="lg:max-w-5xl mx-auto lg:p-16 pb-32 px-4 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 py-8">
        {/* Left side - Image Gallery */}
        <div>
          <ImageGallery images={data.images} />
        </div>

        {/* Right side - Product Details */}
        <ProductDetailsCard data={data} />
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <FeaturedProducts />
      </div>
    </div>
  );
}
