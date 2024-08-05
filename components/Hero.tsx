import React from 'react'
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="bg-accent lg:max-w-7xl 2xl:max-w-screen-2xl w-full lg:mt-[-80px] lg:px-16 py-10 lg:py-16 px-4">
      <div className=" md:flex items-center justify-center">
        <div className="flex flex-col gap-10">
          <h1 className="font-bold lg:text-7xl text-4xl lg:text-left text-center text-primary lg:max-w-2xl lg:leading-[101px]">Decent Delight Online Bakery</h1>
          <div className='hidden md:block'>
            <Button size="lg" className="flex items-center gap-2">Order Now <ArrowRight /></Button>
          </div>
        </div>
        {/* Desktop view */}
        <div className='hidden md:block'>
          <Image src="/main.jpg" width={400} height={400} className=" object-cover rounded-lg lg:aspect-square" alt="main" />
        </div>

        {/* Mobile view */}
        <div className='md:hidden relative max-md:w-full h-80 mt-16'>
          <Image src="/main.jpg" fill sizes="40vw" className="absolute  object-cover rounded-lg lg:aspect-square" alt="main" />
        </div>

        <div className='md:hidden mt-10 flex items-center justify-center'>
          <Button size="lg" className="flex items-center gap-2">Order Now <ArrowRight /></Button>
        </div>
      </div>
    </main>
  )
}

export default Hero