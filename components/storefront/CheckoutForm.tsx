"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutSchema, CheckoutSchemaType } from "@/lib/zodSchemas";
import { PAYMENT_MODES } from "@/lib/constants";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckoutFormProps {
  handleSubmit: (data: CheckoutSchemaType) => void;
}

const CheckoutForm = ({ handleSubmit }: CheckoutFormProps) => {
  const [selectedMode, setSelectedMode] = useState<number | null>(null);

  const form = useForm<CheckoutSchemaType>({
    resolver: zodResolver(CheckoutSchema),
  });

  const handleSelectMode = (idx: number) => {
    setSelectedMode((prev) => (prev === idx ? null : idx));

    const mode = idx === 0 ? "online" : "cash";
    form.setValue("paymentMode", mode, { shouldValidate: true });
  };

  const onSubmit = (data: CheckoutSchemaType) => {
    handleSubmit(data);
  };

  return (
    <Card className="bg-white rounded-lg shadow p-6 h-fit">
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
            {form.formState?.errors?.firstName && (
              <p className="text-red-500 text-sm">
                {form.formState?.errors?.firstName.message}
              </p>
            )}
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
            {form.formState?.errors?.lastName && (
              <p className="text-red-500 text-sm">
                {form.formState?.errors?.lastName.message}
              </p>
            )}
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
            {form.formState?.errors?.email && (
              <p className="text-red-500 text-sm">
                {form.formState?.errors?.email.message}
              </p>
            )}
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
            {form.formState?.errors?.contact && (
              <p className="text-red-500 text-sm">
                {form.formState?.errors?.contact.message}
              </p>
            )}
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
          {form.formState?.errors?.street && (
            <p className="text-red-500 text-sm">
              {form.formState?.errors?.street.message}
            </p>
          )}
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
            {form.formState?.errors?.city && (
              <p className="text-red-500 text-sm">
                {form.formState?.errors?.city.message}
              </p>
            )}
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
            {form.formState?.errors?.postalCode && (
              <p className="text-red-500 text-sm">
                {form.formState?.errors?.postalCode.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-10">Payment Method</h2>
          <div className="grid grid-cols-2 gap-4 w-full mt-2">
            {["Online Payment", "Cash On Delivery"].map((mode, idx) => (
              <Button
                size="lg"
                key={idx}
                type="button"
                onClick={() => handleSelectMode(idx)}
                variant="outline"
                className={cn(
                  selectedMode === idx ? "border-2 bg-input" : "border-input",
                  "rounded-sm flex items-center gap-2"
                )}
              >
                <Circle
                  size={12}
                  className={cn(
                    selectedMode === idx ? "text-primary" : "text-gray-700",
                    " rounded-full"
                  )}
                />
                <span className="text-gray-700">{mode}</span>
              </Button>
            ))}
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
