import React from "react";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/main-cake.jpg"
          fill
          priority
          className="object-cover w-full h-full"
          alt="main"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4 lg:px-16">
        <div className="flex flex-col items-center gap-y-4 justify-center text-center max-w-xl w-full">
          <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
            Decent Delight
          </h1>
          <p className="font-medium font-sans text-white leading-tight">
            freshly baked cakes made with love and the finest ingredients,
            delivering sweetness in every bite
          </p>

          <div>
            <Button
              size="lg"
              className="bg-primary/80 text-white"
            >
              <Link href="/catalog" className="flex items-center gap-2">
                Order Now <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
