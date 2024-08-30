import prisma from "@/app/lib/db"

import ProductCard from "../storefront/ProductCard";

async function getData() {
    const data = await prisma.product.findMany({
        where: {
            isMostDelicious: true,
        },
        select: {
            id: true,
            name: true,
            description: true,
            images: true,
            price: true,
        },
        orderBy: {
            createdAt: "desc"
        }
    });

    return data;
}

export default async function FeaturedProducts() {
    const data = await getData();

    return (
        <div className="lg:max-w-7xl mx-auto w-full lg:py-20 lg:px-24 py-16 px-4">
            <div className="flex flex-col gap-4">
                <h1 className="font-bold text-2xl text-primary">Featured Products</h1>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-4 gap-6">
                    {data.map((item: any) => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}