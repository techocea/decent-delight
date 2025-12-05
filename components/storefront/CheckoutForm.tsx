"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useForm } from "react-hook-form";
import { CheckoutSchema, CheckoutSchemaType } from "@/lib/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";

interface CheckoutFormProps {
  onSubmit: (data: CheckoutSchemaType) => void;
}

const CheckoutForm = ({ onSubmit }: CheckoutFormProps) => {
  const form = useForm<CheckoutSchemaType>({
    resolver: zodResolver(CheckoutSchema),
  });

  return (
    <Card className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </Label>
            <Input
              {...form.register("firstName")}
              type="text"
              placeholder="John"
            />
          </div>
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </Label>
            <Input
              {...form.register("lastName")}
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </Label>
            <Input
              {...form.register("email")}
              type="email"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number
            </Label>
            <Input
              {...form.register("contact")}
              type="text"
              placeholder="07X XXX XXXXX"
            />
          </div>
        </div>

        <div>
          <Label className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </Label>
          <Input
            {...form.register("street")}
            type="text"
            placeholder="123 Main St"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </Label>
            <Input
              {...form.register("city")}
              type="text"
              placeholder="New York"
            />
          </div>
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1">
              ZIP Code
            </Label>
            <Input
              {...form.register("postalCode")}
              type="text"
              placeholder="10001"
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full mt-4 tracking-wider rounded-none"
        >
          Continue to Payment
        </Button>
      </form>
    </Card>
  );
};

export default CheckoutForm;
