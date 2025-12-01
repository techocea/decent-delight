"use server";

import { db } from "@/lib/db";
import { products } from "@/lib/schema";
import { productSchema } from "@/lib/zodSchemas";
import { parseWithZod } from "@conform-to/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProduct(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: productSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await db.insert(products).values({
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    weight: formData.get("weight") as string,
    imageUrl: formData.get("imageUrl") as string,
    price: Number(formData.get("price")),
  });

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}
