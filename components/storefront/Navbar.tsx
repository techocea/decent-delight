import React from "react";
import Link from "next/link";
import Image from "next/image";

import { ShoppingBagIcon, User2Icon } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserDropdown } from "./UserDropdown";
import inter from "@/lib/fonts";

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
// import { redis } from "@/app/lib/redis";
// import { Cart } from "@/lib/interface";
import MobileNav from "./MobileNav";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // const cart: Cart | null = await redis.get(`cart-${user?.id}`);
  // const total = cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <header className="bg-accent lg:max-w-7xl 2xl:max-w-screen-2xl flex items-center h-16 justify-between w-full px-4 lg:py-6 lg:px-8">
      <Link href="/">
        <Image
          src="/logo.png"
          width={231}
          height={60}
          className="max-md:w-2/3"
          alt="Decent Delight"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-6">
        {navLinks.map((item) => (
          <Link href={item.url} key={item.label}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-2 justify-between">
        {user ? (
          <UserDropdown
            email={user.email as string}
            name={user.given_name as string}
            userImage={
              user.picture ?? `https://avatar.vercel.sh/${user.given_name}`
            }
          />
        ) : (
          <LoginLink>
            <User2Icon />
          </LoginLink>
        )}

        {/* <Link href="/bag">
          <div className="relative">
            <ShoppingBagIcon className="text-primary cursor-pointer" />
            <div
              className={`${inter.className} flex items-center justify-center absolute -top-4 -right-4 bg-red-500 rounded-full w-6 h-6 text-white`}
            >
              {total}
            </div>
          </div>
        </Link> */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
