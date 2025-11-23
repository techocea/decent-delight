import { NAV_ITEMS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-primary lg:max-w-6xl xl:max-w-5xl w-full mx-auto lg:pt-10 border-t">
      <div className="flex flex-col font-sans">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full gap-2 lg:px-8 p-4">
          <div className="flex flex-col gap-4 lg:max-w-sm">
            <Image
              src="/logo.png"
              width={231}
              height={60}
              className="max-md:w-[50%] object-contain "
              alt="Decent Delight"
            />

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
            <div className="flex flex-col gap-4">
              <p className="font-bold">OUR SHOP</p>
              {["About us", "Privacy Policy", "Refund Policy"].map((item) => (
                <p key={item} className="text-sm">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold">CONTACT</p>
            {[
              "Negombo, Sri Lanka",
              "decentdelight2022@gmail.com",
              "+94769201150",
            ].map((item) => (
              <p key={item} className="text-sm">
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-col">
            <p className="font-semibold pb-2 uppercase">Subscribe us</p>
            <div className="flex">
              <Input
                placeholder="Enter your email address"
                className="rounded-none"
              />
              <Button className="rounded-none">Subscribe</Button>
            </div>
            <div className="mt-4">
              <p className="font-semibold pb-2 uppercase">
                Secure payment options
              </p>
              <div className="flex"></div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t px-0 py-4">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Decent Delight. All rights
            reserved.
          </p>
          <p className="text-center text-sm">
            Developed by <Link href="www.webizera.com">Webizera</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
