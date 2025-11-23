import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PRODUCTS } from "@/lib/constants";
import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

const Catalog = () => {
    return (
        <div className="lg:max-w-6xl xl:max-w-5xl w-full mx-auto lg:py-16 lg:px-4 p-4">
            <div className="flex items-center justify-center">
                <h1 className="font-bold text-2xl lg:text-3xl text-primary">
                    Catalogue Page
                </h1>
            </div>
            <div className="mt-10 grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 w-full gap-2">
                {PRODUCTS.map((product) => (
                    <Card key={product.id} className="rounded-none bg-white shadow-lg">
                        <CardHeader className="items-center text-center py-4">
                            <CardTitle className="text-base">{product.name}</CardTitle>
                            <p className="text-sm font-sans">{product.weight}</p>
                        </CardHeader>
                        <CardContent className="w-full h-[220px] flex items-center justify-center">
                            <Image src={product.imageUrl} width={200} height={180} alt={product.name} className="object-center aspect-square" />
                        </CardContent>
                        <CardFooter className="max-sm:flex-col-reverse gap-2 lg:justify-between">
                            <Button variant="outline" className="rounded-none flex items-center gap-2">
                                Add to Cart <Plus />
                            </Button>
                            <p className="font-semibold text-lg text-primary">${" "}{product.price.toFixed(2)}</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Catalog;
