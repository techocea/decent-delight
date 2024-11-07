import prisma from "@/app/lib/db";
import ProductCard from "@/components/storefront/ProductCard";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

async function getData(productCategory: string) {
  switch (productCategory) {
    case "gateaux": {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
        },
        where: {
          status: "published",
          category: "gateaux",
        },
      });

      return {
        title: "All Products For Gateuax",
        data: data,
      };
    }
    case "cake_jars": {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
        },
        where: {
          status: "published",
          category: "cake_jars",
        },
      });

      return {
        title: "All Products For Cake Jars",
        data: data,
      };
    }
    case "cookies": {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
        },
        where: {
          status: "published",
          category: "cookies",
        },
      });

      return {
        title: "All Products For Cookies",
        data: data,
      };
    }
    case "brownies": {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
        },
        where: {
          status: "published",
          category: "brownies",
        },
      });

      return {
        title: "All Products For Brownies",
        data: data,
      };
    }
    case "cupcakes": {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
        },
        where: {
          status: "published",
          category: "cupcakes",
        },
      });

      return {
        title: "All Products For Cupcakes",
        data: data,
      };
    }
    case "predesigned_mini_cakes": {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
        },
        where: {
          status: "published",
          category: "predesigned_mini_cakes",
        },
      });

      return {
        title: "All Products For Predesigned Mini Cakes",
        data: data,
      };
    }
    case "predesigned_cakes": {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
        },
        where: {
          status: "published",
          category: "predesigned_cakes",
        },
      });

      return {
        title: "All Products For Predesigned Cakes",
        data: data,
      };
    }
    case "sweet_table": {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
        },
        where: {
          status: "published",
          category: "sweet_table",
        },
      });

      return {
        title: "All Products For Sweet Table",
        data: data,
      };
    }
    default: {
      return notFound();
    }
  }
}

export default async function ProductsByCategory({
  params,
}: {
  params: { name: string };
}) {
  noStore();
  const { data, title } = await getData(params.name);

  return (
    <section className="px-4 pb-16 md:px-6 lg:py-10">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-2xl py-5">{title}</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-4 gap-8">
          {data.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
