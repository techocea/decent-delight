import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
export default function Footer() {
    const links = [
        { name: "Bakery", href: "/bakery" },
        { name: "Features", href: "/features" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];
    return (
        <footer className="bg-primary-100 h-[50vh] flex flex-col items-center justify-evenly gap-5 w-full">
            <div className="flex max-md:flex-col items-start justify-evenly w-full">
                <Image
                    src="/logo.png"
                    width={150}
                    height={170}
                    alt="cake website in negombo"
                />
                <nav className="max-md:hidden gap-12 flex ml-16">
                    {links.map((link, idx) => {
                        return (
                            <div key={idx}>
                                <Link
                                    className="text-sm font-semibold text-primary"
                                    href={link.href}
                                >
                                    {link.name}
                                </Link>
                            </div>
                        );
                    })}
                </nav>
                <div className="flex flex-col gap-2">
                    <h2 className="text-sm font-semibold text-primary">Follow us on</h2>
                    <div className="flex gap-2">
                        <a href="https://www.tiktok.com/@decentdelight.com"><FaTiktok /></a>
                        <a href="https://www.instagram.com/decent_delight"><FaInstagram /></a>
                        <a href="https://web.facebook.com/decentdelight"><FaFacebook /></a>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-primary text-sm">Designed and developed by Webizera - @2024</p>
            </div>
        </footer>
    );
}
