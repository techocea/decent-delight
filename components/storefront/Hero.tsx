import React from 'react'
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
import Image from "next/image";

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
      <div className="text-center max-w-4xl">
        <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
        Decent Delight Online Bakery
        </h1>
        {/* Uncomment when ready to use button
        <div className="mt-8">
        <Button 
          size="lg" 
          className="bg-white text-primary hover:bg-white/90 flex items-center gap-2"
        >
          Order Now <ArrowRight />
        </Button>
        </div>
        */}
      </div>
      </div>
    </main>
  )
}

export default Hero