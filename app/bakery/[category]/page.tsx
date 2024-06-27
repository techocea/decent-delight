import Image from "next/image";
import { category } from "../../interface";
import { client } from "../../../lib/sanity";
import Link from "next/link";
import { Button } from "@/components/ui/ui/button";

async function getData(category: string) {
    const query = `*[_type == "product" && category->slug.current =="${category}"]{
        _id,
        "imageUrl": images[0].asset->url,
        name,
        "slug": slug.current,
        "categoryName": category->name,         
      }`;

    const data = await client.fetch(query);

    return data;
}

export const dynamic = "force-dynamic";

export default async function CategoryPage({ params }: { params: { category: string } }) {
    const data: category[] = await getData(params.category)

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl p-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="flex justify-between items-center">
                    {/* <h1 className="text-2xl font-bold tracking-tight text-gray-900">Our Products for {params.category}</h1> */}
                </div>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {data.map((product) => (
                        <div key={product._id} className="relative">
                            <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 hover:opactiy-75 lg:h-80">
                                <Image className="w-full h-full object-cover object-center lg:h-full lg:w-full" src={product.imageUrl}
                                    width={300}
                                    height={300}
                                    alt="product Image" />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div className="flex justify-between w-full items-center">
                                    <h3 className="text-sm font-medium text-gray-700 ">
                                        {product.name}
                                    </h3>
                                    <Button asChild>
                                        <Link href={`/product/${product.slug}`}>Buy Cake</Link></Button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}