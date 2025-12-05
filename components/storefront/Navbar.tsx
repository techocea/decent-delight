import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS } from "@/lib/constants";
import { LogOut, User } from "lucide-react";
import CartIcon from "./CartIcon";
import {
  getKindeServerSession,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "../ui/button";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="relative">
      <header className="bg-white lg:max-w-7xl flex items-center h-16 justify-between w-full px-4 lg:py-6 lg:px-8">
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
          <ul className="flex space-x-6 relative">
            {NAV_ITEMS.map((item, index) => (
              <Link key={index} href={item.href}>
                {item.label}
              </Link>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4 justify-between">
          <CartIcon />

          {user ? (
            <Button
              variant="outline"
              className="font-sans hover:bg-background border rounded-full py-2 px-4 text-sm flex gap-x-2"
            >
              {user.email}{" "}
              <LogoutLink>
                <LogOut />
              </LogoutLink>
            </Button>
          ) : (
            <RegisterLink>
              <User />
            </RegisterLink>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
