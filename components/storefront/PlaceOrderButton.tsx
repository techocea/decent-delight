"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { FaWhatsapp } from "react-icons/fa";
import { Card } from "../ui/card";
import { useState } from "react";

type iAppProps = {
  productName: string;
  productPrice: number;
};

const PlaceOrderButton = ({ productName, productPrice }: iAppProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello Decent Delight, I would like to place an order for ${productName}.\n\nDetails:\n- Name: ${name}\n- Contact: +94${contact}\n- Email: ${email}\n- Address: ${address1},${address2}\n- Product Price: Rs: ${productPrice}`;

    const countryCode = "+94";
    const whatsappUrl = `https://wa.me/${countryCode}${770621150}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-whatsapp hover:bg-whatsapp-foreground flex items-center gap-x-2 justify-center">
          <FaWhatsapp size={28} /> Place an Order
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[375px]">
        <DialogHeader>
          <DialogTitle>Please Confirm Order</DialogTitle>
          <DialogDescription className="text-xs">
            Kindly enter the required details. Click Proceed when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="col-span-4"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="col-span-4"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-2">
              <Card className="w-full h-full flex items-center justify-center cursor-default">
                +94
              </Card>
              <Input
                id="contact"
                placeholder="72 XXX XXXX"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="address1"
                placeholder="Address Line 1"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
                required
                className="col-span-4"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="address2"
                placeholder="Address Line 2"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                required
                className="col-span-4"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Proceed</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PlaceOrderButton;
