import { navLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-accent lg:max-w-7xl 2xl:max-w-screen-2xl w-full lg:py-10 lg:px-8 p-4">
      <div className="flex max-md:flex-col justify-between w-full lg:items-start lg:gap-4 gap-10">
        <div className="flex flex-col gap-4 lg:max-w-sm">
          <Image
            src="/logo.png"
            width={231}
            height={60}
            className="max-md:w-[50%] object-contain "
            alt="Decent Delight"
          />
          <h3>No 243 Mahahunupitiya, Katuwapitya Road,Negombo</h3>
          <h3>decentdelight@gmail.com</h3>
          <p>+94777711335</p>
          <div className="flex flex-col gap-2">
            <p>Follow us on</p>
            <div className="flex gap-3">
              <FaFacebook />
              <FaInstagram />
              <FaTiktok />
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold">COMPANY</h3>
          <ul className="flex flex-col gap-4">
            <li>About us</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold">SHOP</h3>
          {navLinks.slice(1, 4).map((item) => (
            <Link href={item.url} key={item.label}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold pb-2">Subscribe to our newsletter</h3>
          <div className="flex">
            <Input placeholder="Enter your email address" />
            <Button>Subscribe</Button>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold pb-2">Secure payment options</h3>
            <div className="flex"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
