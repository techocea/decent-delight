"use client";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react"
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
const links = [
    { name: "Bakery", href: "/bakery" },
    { name: "Features", href: "/features" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
]

export default function Navbar() {
    const pathname = usePathname();
    const { handleCartClick } = useShoppingCart();
    return (
        <header className="bg-primary-100 border-b">
            <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                <Link href="/">
                    <Image src="/logo.png" width={150} height={100} alt="decent delight" />
                </Link>

                <nav className="max-md:hidden gap-12 flex ml-16">
                    {links.map((link, idx) => {
                        return (
                            <div key={idx}>
                                {pathname === link.href ? (
                                    <Link className="text-lg font-semibold text-primary" href={link.href}>
                                        {link.name}
                                    </Link>
                                ) : (
                                    <Link className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary" href={link.href}>
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        )
                    })}
                </nav>
                <div className="flex divide-x border-r sm:border-l">
                    <Button variant={"outline"}
                        onClick={() => handleCartClick()}
                        className="flex flex-col gap-y-1.5 w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-none  bg-primary-100">
                        <ShoppingBag />
                        <span className="hidden text-xs font-semibold  text-gray-500 sm:block">Cart</span>
                    </Button>
                </div>
            </div>
        </header>
    );
}