"use client";
//import AddToBag from "@/app/components/AddToBag";
//import CheckoutNow from "@/app/components/CheckoutNow";
import React, { useState } from "react";
import ImageGallery from "@/components/ImageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/lib/sanity";
import { Button } from "@/components/ui/button";
import { Truck } from "lucide-react";
import WhatsAppChatButton from "@/components/WhatsappButton";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
        _id,
          images,
          price,
          name,
          description,
          "slug": slug.current,
          "categoryName": category->name,
          price_id
          }`;

  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

export default async function ProductPge({
  params,
}: {
  params: { slug: string };
}) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const data: fullProduct = await getData(params.slug);

  const handleSizeToggle = (size: string) => {
    setSelectedSize(size);
  };
  return (
    <section className="bg-white max-md:pb-8">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data?.images} />
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {data.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
              </h2>
            </div>
            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  Rs&nbsp;{data.price}
                </span>
              </div>
            </div>
            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck className="w-6 h-6" />
              <span className="text-sm">2-4 Days Delivery</span>
            </div>
            <p className="mt-10 text-base text-gray-500 tracking-wide">
              {data.description}
            </p>
            <div className="flex flex-col gap-16 mt-10">
              <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-gray-400">Size</h2>
                <div className="flex gap-2">
                  {["S", "M", "L"].map((size) => (
                    <Button
                      key={size}
                      variant="outline"
                      className={`rounded-full ${selectedSize === size ? "bg-gray-800 text-white" : ""}`}
                      onClick={() => handleSizeToggle(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="flex gap-2.5">
                <WhatsAppChatButton
                  productName={data.name}
                  price={data.price}
                  selectedSize={selectedSize}
                />
                {/* <AddToBag
                  currency="USD"
                  description={data.description}
                  image={data.images[0]}
                  name={data.name}
                  price={data.price}
                  price_id={data.price_id}
                />
                <CheckoutNow
                  currency="USD"
                  description={data.description}
                  image={data.images[0]}
                  name={data.name}
                  price={data.price}
                  price_id={data.price_id}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
