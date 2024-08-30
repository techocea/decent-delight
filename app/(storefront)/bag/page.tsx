import { checkOut, deleteItem } from "@/app/actions";
import { redis } from "@/app/lib/redis";
import { Button } from "@/components/ui/button";
import { DeleteItem } from "@/components/ui/submit-button";
import { Cart } from "@/lib/interface";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ShoppingBagIcon } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function BagRoute() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/");
  }

  const cart: Cart | null = await redis.get(`cart-${user.id}`);

  let totalPrice = 0;

  cart?.items.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  return (
    <div className="max-w-sm mx-auto px-4 my-20 min-h-[55vh]">
      {cart?.items.length === 0 ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center mt-16">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-300">
            <ShoppingBagIcon className="w-10 h-10 text-purple-800" />
          </div>
          <h2 className="mt-6 font-bold text-md">
            You don`t have any items in the bag
          </h2>
          <p className="text-xs my-2 text-gray-500">
            You currently don`t have any products in your shopping bag.Please
            add some so that you can see them right here.
          </p>
          <Button asChild className="bg-purple-800 hover:bg-purple-500">
            <Link href="/">Shop Now</Link>
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-y-10">
          {cart?.items.map((item) => (
            <div key={item.id} className="flex">
              <div className="w-24 h-24 sm:w-32 sm:h-32 relative">
                <Image
                  src={item.imageString}
                  fill
                  className="rounded-md object-cover"
                  alt="Product Image"
                />
              </div>
              <div className="ml-5 flex justify-between w-full font-medium">
                <p>{item.name}</p>
                <div className="flex flex-col h-full justify-between">
                  <div className="flex items-center gap-x-2 text-sm">
                    {item.quantity} x Rs. {item.price}
                  </div>

                  <form action={deleteItem} className="text-end">
                    <input type="hidden" name="productId" value={item.id} />
                    <DeleteItem />
                  </form>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-10">
            <div className="flex items-center justify-between w-full font-medium">
              <p>SubTotal:</p>
              <p>Rs {new Intl.NumberFormat("en-US").format(totalPrice)}</p>
            </div>
          </div>

          <form action={checkOut}>
            <Button size="lg" className="bg-purple-800 hover:purple-500 rounded-lg w-full">
            Chekout
          </Button>
          </form>
        </div>
      )}
    </div>
  );
}
