"use client";
import { Button } from "@/components/ui/ui/button";
import Link from "next/link";
//import { usePathname } from "next/navigation";
// import { ShoppingBag } from "lucide-react"
// import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/ui/navigation-menu";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import MobileNav from "./MobileNav";

interface Category {
    topic: string;
    href: string;
}

interface Link {
    type: string;
    categories: Category[];
}
const links: Link[] = [
    {
        type: "Sweets",
        categories: [
            {
                topic: "Brownies",
                href: "brownies",
            },
            {
                topic: "Cookies",
                href: "cookies",
            },
        ],
    },
    {
        type: "Cakes",
        categories: [
            {
                topic: "Gateaux",
                href: "gateaux",
            },
            {
                topic: "Cupcakes",
                href: "cupcakes",
            },
            {
                topic: "Mini Cakes",
                href: "mini-cakes",
            },
            {
                topic: "Predesgined Cakes",
                href: "predesigned-cakes",
            },
        ],
    },
    {
        type: "Custom Decos",
        categories: [
            {
                topic: "Cake Jars",
                href: "cake-jars",
            },
            {
                topic: "Sweet Table",
                href: "sweet-table",
            },
        ],
    },
];

export default function Navbar() {
    const [showMobileNav, SetShowMobileNav] = useState(false);

    const handleToggleNav = () => {
        SetShowMobileNav(!showMobileNav);
    };
    useEffect(() => {
        if (showMobileNav) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [showMobileNav]);

    // const pathname = usePathname();
    //const { handleCartClick } = useShoppingCart();
    return (
        <header className="bg-primary-100 border-b h-20 flex items-center justify-between">
            <div className="flex items-center justify-evenly max-md:justify-between w-full mx-auto max-w-2xl px-4 lg:max-w-7xl">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        width={150}
                        height={100}
                        alt="decent delight"
                    />
                </Link>
                <NavigationMenu className="max-md:hidden">
                    <NavigationMenuList>
                        {links.map((menuItem, idx) => (
                            <NavigationMenuItem key={idx}>
                                <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                                    {menuItem.type}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="grid gap-3 p-4 md:w-[450px] lg:w-[480px] lg:grid-cols-[.75fr_1fr]">
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[450px] md:grid-cols-2 lg:w-[480px] ">
                                        {menuItem.categories.map((category, index) => (
                                            <NavigationMenuItem key={index}>
                                                <Link href={`/bakery/${category.href}`}>
                                                    {category.topic}
                                                </Link>
                                            </NavigationMenuItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Mobile Navigation */}
                <div
                    className="flex items-center justify-center lg:hidden w-20 h-20 cursor-pointer"
                    onClick={handleToggleNav}
                >
                    {showMobileNav ? (
                        <LiaTimesSolid size={32} className="text-primary" />
                    ) : (
                        <RxHamburgerMenu size={32} className="text-primary" />
                    )}
                    <div
                        className={`${!showMobileNav
                            ? " sticky left-[-100%]"
                            : " sticky z-10 top-20 left-0 h-auto w-full"
                            }`}
                    >
                        <MobileNav />
                    </div>
                </div>

                {/* <div className="flex divide-x border-r sm:border-l">
                    <Button variant={"outline"}
                        onClick={() => handleCartClick()}
                        className="flex flex-col gap-y-1.5 w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-none  bg-primary-100">
                        <ShoppingBag />
                        <span className="hidden text-xs font-semibold  text-gray-500 sm:block">Cart</span>
                    </Button>
                </div> */}
            </div>
        </header>
    );
}
