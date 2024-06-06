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
    <section className="bg-primary-100 mx-auto max-w-2xl px-4  lg:max-w-7xl lg:px-8 py-10 max-md:py-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-1">
        <h1 className="font-bold text-[121px] leading-[108px] max-md:text-3xl max-w-xl lg:text-6xl text-primary flex text-center">
          Decent Delight Online Bakery
        </h1>
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
          <Button
            variant="default"
            className="rounded-full"
          >
            <Link href="/bakery" className=" px-7 py-1 flex gap-2">
              Order Now <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
