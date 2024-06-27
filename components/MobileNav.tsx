import Link from "next/link";

const mobileNavItems = [
    {
        topic: "Brownies",
        href: "brownies",
    },
    {
        topic: "Cookies",
        href: "cookies",
    },
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
    {
        topic: "Cake Jars",
        href: "cake-jars",
    },
    {
        topic: "Sweet Table",
        href: "sweet-table",
    },
]

export default function MobileNav() {
    return (
        <nav className="py-6 bg-primary-100">
            <ul className="h-full flex flex-col items-center justify-center">
                {mobileNavItems.map((navItem, idx) => (
                    <li key={idx} className="hover:bg-accent p-3 rounded-lg">
                        <Link href={`/bakery/${navItem.href}`}>{navItem.topic}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}