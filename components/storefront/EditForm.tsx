"use client";

import Link from "next/link";
import Image from "next/image";
import { useActionState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, XIcon } from "lucide-react";
import { UploadButton } from "@/lib/uploadthing";
import { SubmitButton } from "../ui/submit-button";
import { updateProduct } from "@/app/actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { productSchema } from "@/lib/zodSchemas";

interface iAppProps {
  data: {
    id: string;
    name: string;
    description: string;
    weight: string;
    price: number;
    imageUrl: string;
  };
}

const EditForm = ({ data }: iAppProps) => {
  const [lastResult, action] = useActionState(updateProduct, undefined);
  const [form, fields] = useForm({
    lastResult,
    defaultValue: {
      name: data.name,
      description: data.description,
      weight: data.weight,
      price: data.price,
      imageUrl: data.imageUrl,
    },

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: productSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <>
      <form id={form.id} onSubmit={form.onSubmit} action={action} className="sm:px-4 md:px-8 lg:px-10 w-full mx-auto">
        <input type="hidden" name="id" value={data.id} />
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/products">
              <ChevronLeft className="w-4 h-4" />
            </Link>
          </Button>
          <h1 className="text-xl font-semibold tracking-tight">Edit Product</h1>
        </div>

        <Card className="mt-5 bg-white">
          <CardHeader>
            <CardTitle>Product Details</CardTitle>
            <CardDescription>
              In this form you can update your product
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <Label>Name</Label>
                <Input
                  type="text"
                  key={fields.name.key}
                  name={fields.name.name}
                  defaultValue={data.name}
                  className="w-full"
                  placeholder="Product Name"
                />

                <p className="text-red-500">{fields.name.errors}</p>
              </div>

              <div className="flex flex-col gap-3">
                <Label>Description</Label>
                <Textarea
                  key={fields.description.key}
                  name={fields.description.name}
                  defaultValue={data.description}
                  className="w-full"
                  placeholder="Write the product description"
                />
                <p className="text-red-500">{fields.description.errors}</p>
              </div>

              <div className="flex flex-col gap-3">
                <Label>Weight</Label>
                <Input
                  type="text"
                  key={fields.weight.key}
                  name={fields.weight.name}
                  defaultValue={fields.weight.initialValue}
                  className="w-full"
                  placeholder="Product weight"
                />
                <p className="text-red-500">{fields.weight.errors}</p>
              </div>

              <div className="flex flex-col gap-3">
                <Label>Price (Rs)</Label>
                <Input
                  type="number"
                  key={fields.price.key}
                  name={fields.price.name}
                  defaultValue={data.price}
                  className="w-full"
                  placeholder="Rs 4999"
                />
                <p className="text-red-500">{fields.price.errors}</p>
              </div>

              <div className="flex flex-col gap-3">
                <Label>Images</Label>
                <input
                  type="hidden"
                  value={fields.imageUrl.value}
                  key={fields.imageUrl.key}
                  name={fields.imageUrl.name}
                />
                {fields.imageUrl.value ? (
                  <div className="flex gap-5">
                    <div className="relative w-[100px] h-[100px]">
                      <Image
                        height={100}
                        width={100}
                        src={fields.imageUrl.value}
                        className="w-full h-full object-cover rounded-lg"
                        alt="product image"
                      />
                      <button
                        onClick={() =>
                          form.update({ name: fields.imageUrl.name, value: "" })
                        }
                        type="button"
                        className="absolute -top-2 -right-3 bg-red-500 p-2 rounded-lg"
                      >
                        <XIcon className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="border rounded-lg flex items-center justify-center w-full h-40">
                    <UploadButton
                      endpoint="imageUploader"
                      className="ut-button:px-2 ut-button:py-1.5 ut-button:bg-blue-500 ut-button:hover:bg-blue-500/50 ut-button:ut-readying:bg-blue-500/50"
                      onClientUploadComplete={(res) => {
                        const uploadedUrl = res[0].ufsUrl || res[0].url;
                        form.update({
                          name: fields.imageUrl.name,
                          value: uploadedUrl,
                        });
                      }}
                      onUploadError={() => alert("something went wrong!")}
                    />
                  </div>
                )}
                <p className="text-red-500">{fields.imageUrl.errors}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton text="Edit Product" />
          </CardFooter>
        </Card>
      </form>
    </>
  );
};

export default EditForm;
