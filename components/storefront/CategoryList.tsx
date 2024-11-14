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
          <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:aspect-w-1 sm:row-span-2">
            <Image
              src="/cookies.jpg"
              fill
              quality={100}
              className="w-full h-full object-cover object-center"
              alt="Category Image"
            />
            <div className="bg-gradient-to-b from-transparent to-primary-100 opacity-55" />
            <div className="p-6 flex items-end">
              <div>
                <h3 className="font-bold text-2xl text-white">Sweets</h3>
                <Link
                  href="/category/cookies"
                  className="text-sm font-medium text-white"
                >
                  Show Now
                </Link>
              </div>
            </div>
          </div>

          <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:aspect-none sm:relative sm:h-full">
            <Image
              src="/minicake.jpg"
              fill
              quality={100}
              className="w-full h-full object-cover object-center"
              alt="Category Image"
            />
            <div className="bg-gradient-to-b from-transparent to-primary-100 opacity-55 sm:absolute sm:inset-0" />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-bold text-2xl text-white">Cakes</h3>
                <Link
                  href="/category/predesigned_mini_cakes"
                  className="text-sm font-medium text-white"
                >
                  Show Now
                </Link>
              </div>
            </div>
          </div>

          <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:aspect-none sm:relative sm:h-full">
            <Image
              src="/main.jpg"
              fill
              quality={100}
              className="w-full h-full object-cover object-center"
              alt="Category Image"
            />
            <div className="bg-gradient-to-b from-transparent to-primary-100 opacity-55 sm:absolute sm:inset-0" />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-bold text-2xl text-white">
                  Custom designs
                </h3>
                <Link
                  href="/category/sweet_table"
                  className="text-sm font-medium text-white"
                >
                  Show Now
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
