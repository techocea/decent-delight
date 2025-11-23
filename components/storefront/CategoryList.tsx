import Image from "next/image";
import React from "react";
import { Card, CardContent, CardDescription, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const CategoryList = () => {
  return (
    <div className="bg-secondary-foreground/80 h-full">
      <div className="flex flex-col lg:max-w-6xl mx-auto w-full py-16 px-4">
        <h1 className="font-bold text-2xl lg:text-3xl text-white capitalize">
          Browse by category
        </h1>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 sm:gap-6">
          {["Sweets & Cookies", "Cakes & Mini Cakes", "Custom Designs"].map(
            (cat, idx) => (
              <Card key={idx} className="p-0 bg-white">
                <Image
                  src="/cookies.jpg"
                  width={400}
                  height={256}
                  className="border rounded-tl-lg rounded-tr-lg object-center w-full h-64"
                  alt="Category Image"
                />
                <CardContent className="flex flex-col items-center justify-center">
                  <CardDescription className="font-bold text-xl text-primary mb-2">
                    {cat}
                  </CardDescription>
                  <Button size="lg" className="bg-primary/80 text-white">
                    Shop Now <ArrowRight />
                  </Button>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
