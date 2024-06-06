import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
export default function Footer() {
    const links = [{ name: "Bakery", href: "/bakery" }];
    return (
        <footer className="bg-primary-100 h-[30vh] max-md:h-auto flex flex-col items-center justify-center gap-5 w-full">
            <nav className="flex max-md:flex-col items-center max-md:items-start justify-center max-md:p-10 max-md:pb-0 max-md:pt-10 w-full gap-12 max-md:gap-3  max-md:ml-0  max-md:justify-between">
                <Image
                    src="/logo.png"
                    width={150}
                    height={170}
                    alt="cake website in negombo"
                />
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
                <div className="flex flex-col gap-2 ">
                    <h2 className="text-sm font-semibold text-primary">Follow us on</h2>
                    <div className="flex gap-2 max-md:gap-4">
                        <a
                            href="https://www.tiktok.com/@decentdelight.com"
                            className="text-primary hover:text-secondary"
                        >
                            <FaTiktok />
                        </a>
                        <a
                            href="https://www.instagram.com/decent_delight"
                            className="text-primary hover:text-secondary"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://web.facebook.com/decentdelight"
                            className="text-primary hover:text-secondary"
                        >
                            <FaFacebook />
                        </a>
                    </div>
                </div>
            </nav>

            <div>
                <p className="text-primary text-sm">
                    Designed and developed by Webizera - @2024
                </p>
            </div>
        </footer>
    );
}
