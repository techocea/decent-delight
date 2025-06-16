import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = () => {
  return (
    <div className="lg:max-w-7xl mx-auto w-full lg:py-20 lg:px-24 py-16 px-4">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-2xl text-primary capitalize">
          Browse by category
        </h1>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 sm: grid-rows-2 lg:gap-8 sm:gap-x-6 gap-y-6">
          <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:aspect-w-1 sm:row-span-2 relative cursor-pointer">
            <Image
              src="/cookies.jpg"
              fill
              quality={100}
              className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
              alt="Category Image"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-100/90 opacity-55 group-hover:opacity-75 transition-opacity duration-300" />
            <div className="p-6 flex items-end absolute inset-0">
              <div className="transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                <h3 className="font-bold text-2xl text-white">Sweets</h3>
                <Link
                  href="/category/cookies"
                  className="text-sm font-medium text-white hover:underline"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:aspect-none sm:relative sm:h-full cursor-pointer">
            <Image
              src="/minicake.jpg"
              fill
              quality={100}
              className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
              alt="Category Image"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-100/90 opacity-55 group-hover:opacity-75 transition-opacity duration-300" />
            <div className="p-6 flex items-end absolute inset-0">
              <div className="transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                <h3 className="font-bold text-2xl text-white">Cakes</h3>
                <Link
                  href="/category/predesigned_mini_cakes"
                  className="text-sm font-medium text-white hover:underline"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:aspect-none sm:relative sm:h-full cursor-pointer">
            <Image
              src="/main.jpg"
              fill
              quality={100}
              className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
              alt="Category Image"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-100/90 opacity-55 group-hover:opacity-75 transition-opacity duration-300" />
            <div className="p-6 flex items-end absolute inset-0">
              <div className="transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                <h3 className="font-bold text-2xl text-white">
                  Custom designs
                </h3>
                <Link
                  href="/category/sweet_table"
                  className="text-sm font-medium text-white hover:underline"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
