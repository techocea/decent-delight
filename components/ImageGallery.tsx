"use client"

import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";

interface iAppProps {
  images: any;
}

export default function ImageGallery({ images }: iAppProps) {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  }
  return (
    <div className="grid gap-4 lg:grid-cols-5 py-10">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, idx: any) => (
          <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt="online bakery , cake delivery"
              className="w-full h-full object-center object-cover cursor-pointer"
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image src={urlFor(bigImage).url()} alt="bigImage" width={350} height={350} className="w-full h-full object-center object-cover  cursor-pointer" />

      </div>
    </div>
  );
}
