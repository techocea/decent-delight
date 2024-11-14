"use client";

import { useState } from "react";

import Image from "next/image";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface iAppProps {
  images: string[];
}

export default function ImageGallery({ images }: iAppProps) {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const handlePrevClick = () => {
    setMainImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setMainImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleImageClick = (index: number) => {
    setMainImageIndex(index);
  };

  return (
    <div className="grid gap-6 md:gap-3 items-start">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          width={600}
          height={600}
          src={images[mainImageIndex]}
          className="object-cover w-[600px] h-[600px]"
          alt="Single product image"
        />

        <div className="absolute inset-0 flex items-center justify-between px-4">
          <Button onClick={handlePrevClick} variant="ghost" size="icon">
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button onClick={handleNextClick} variant="ghost" size="icon">
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(index === mainImageIndex ? "border-2 border-primary-100" : "border border-slate-400", "relative rounded-lg cursor-pointer")}
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={image}
              width={120}
              height={100}
              className="object-cover object-center w-[120px] h-[100px] rounded-lg"
              alt="Single product images"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
