import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

async function getData() {

  const query = "*[_type == 'HeroImage'][0]";

  const data = await client.fetch(query);

  return data;
}

export default async function Hero() {
  const data = await getData();
  return (
    <section className="bg-primary-100 mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-1 md:mb-16">
        <h1 className="font-bold text-[121px] leading-[108px] sm:text-5xl max-w-xl lg:text-6xl text-primary flex text-center">Decent Delight Online Bakery</h1>
        <div className="flex w-full lg:w-2/3">
          <Image
            src={urlFor(data.image).url()}
            alt="Decent Delight online cake bakery"
            className="h-full w-full object-cover object-center"
            priority
            width={600}
            height={600}
          />
        </div>
        <div>
          <Button variant="default" className="rounded-full px-7 py-1 flex gap-2">Order Now <ArrowRight /></Button>
        </div>
      </div>


    </section>
  );
}