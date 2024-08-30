"use client";

import React from "react";


import { useFormStatus } from "react-dom";
import { Button } from "./button";
import { Loader2, ShoppingBagIcon } from "lucide-react";

interface buttonProps {
  text: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}

export function SubmitButton({ text, variant }: buttonProps) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled variant={variant}>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please Wait{" "}
        </Button>
      ) : (
        <Button variant={variant} type="submit">
          {text}
        </Button>
      )}
    </>
  );
}

export function ShoppingBagButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button
          disabled
          size="lg"
          type="submit"
          className="flex items-center gap-x-2 w-full mt-5 rounded-lg"
        >
          <Loader2 className="animate-spin mr-4 h-5 w-5" />
          Please wait
        </Button>
      ) : (
        <div>
          <Button className="w-full mt-5">
            <ShoppingBagIcon className="mr-4" /> Add to Cart
          </Button>
        </div>
      )}
    </>
  );
}

export function DeleteItem() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <button disabled className="text-destructive text-end">
          Deleting..
        </button>
      ) : (
        <button type="submit" className="text-destructive text-end">
          Delete
        </button>
      )}
    </>
  );
}
