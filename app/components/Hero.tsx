import Image from "next/image";
import { client, urlFor } from "../lib/sanity";

async function getData() {
    const query = "*[_type == 'HeroImage'][0]";

    const data = await client.fetch(query);

    return data;
}
export default async function Hero (){

    const data = await getData();
    return(
        <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="flex flex-wrap justify-between md:mb-16 mb-8">
                <div className="flex flex-col justify-center mb-6  w-full sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24lg:pt-48">
                    <h1 className="text-4xl font-bold sm:text-5xl mb-4 md:mb-8 md:text-6xl">Top fashion for a top price!</h1>
                    <p className="max-w-md leading:relaxed text-gray-500 xl:text-lg">We sell only the exclusive and high quality products for you.We are the best so come and shop with us</p>
            </div>
                <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
                     <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 lg:ml-0">
                        <Image
                        src={urlFor(data.image1).url()}
                        alt="Hero Image"
                        width={500}
                        height={500}
                        className="h-full w-full object-cover object-center"
                    />
                    </div>
                </div>
            </div>
        </section>
    )
}