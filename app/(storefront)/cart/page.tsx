"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import useStore, { Product } from "@/store";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBagIcon, Trash } from "lucide-react";
import QuantityButtons from "@/components/storefront/QuantityButtons";

interface iAppProps {
    product: Product;
}

const Cart = ({ product }: iAppProps) => {
    const { items, deleteCardProduct, getTotalPrice } = useStore();
    const totalPrice = getTotalPrice();

    return (
        <div className="max-w-lg mx-auto px-4 my-20 min-h-[55vh]">
            {items.length === 0 ? (
                <Card className="bg-white flex min-h-[400px] font-sans flex-col gap-2 items-center justify-center rounded-lg text-center mt-16 p-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                        <ShoppingBagIcon className="w-10 h-10 text-secondary" />
                    </div>
                    <h2 className="font-bold text-md">
                        You don`t have any items in the bag
                    </h2>
                    <p className="text-xs my-2 text-gray-500">
                        You currently don`t have any products in your shopping bag. Please
                        add some so that you can see them right here.
                    </p>
                    <Button asChild className="rounded-none">
                        <Link href="/catalog">Shop Now</Link>
                    </Button>
                </Card>
            ) : (
                <Card className="bg-white p-6 flex flex-col gap-4">
                    {items.map(({ product, quantity }) => (
                        <div
                            key={product.id}
                            className="flex gap-4 pb-4 border-b last:border-b-0"
                        >
                            <div className="w-36 h-24 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                                <Image
                                    src={product.imageUrl}
                                    width={144}
                                    height={96}
                                    className="object-cover w-full h-full"
                                    alt={product.name}
                                />
                            </div>

                            <div className="flex flex-col justify-between w-full">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex flex-col gap-2">
                                        <h3 className="font-semibold text-sm text-gray-900">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">
                                            {product.weight}
                                        </p>
                                    </div>

                                    <Button
                                        size="sm"
                                        onClick={() => deleteCardProduct(product.id)}
                                        className="bg-red-500 text-red-200 hover:bg-red-500/20 hover:text-red-600 text-xs font-medium self-start"
                                    >
                                        <Trash />
                                    </Button>
                                </div>

                                <div className="flex items-center justify-between">
                                    <QuantityButtons product={product} />
                                    <p className="font-semibold text-sm">
                                        ${" "}
                                        {new Intl.NumberFormat("en-US").format(
                                            product.price * quantity
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="flex items-center justify-between w-full font-medium mt-2">
                        <p>Grand Total:</p>
                        <p>$ {new Intl.NumberFormat("en-US").format(totalPrice)}</p>
                    </div>
                </Card>
            )}
        </div>
    );
};

export default Cart;
