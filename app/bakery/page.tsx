import Image from "next/image";
import Link from "next/link";
import { client } from "../../lib/sanity";
import { category } from "../interface";
import { Button } from "../../components/ui/ui/button";
async function getData() {
    const query = `*[_type == "category"]{
        _id,
        name,
        "imageUrl":image.asset->url,
        "slug":slug.current,
      }`;

    const data = await client.fetch(query);
    return data;
}

export default async function Bakery() {
    const data: category[] = await getData();

    return (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {data.map((category) => (
                    <div key={category._id} className="relative">
                        <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 hover:opactiy-75 lg:h-80">
                            <Image
                                className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                                src={category.imageUrl}
                                width={300}
                                height={300}
                                alt="product Image"
                            />
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                            <h3 className="text-sm font-medium text-gray-700 ">
                                {category.name}
                            </h3>
                            <Button asChild>
                                <Link href={`/bakery/${category.slug}`}>Select Cake</Link>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
