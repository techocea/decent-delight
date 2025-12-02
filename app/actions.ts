"use server";

import { db } from "@/lib/db";
import { products } from "@/lib/schema";
import { productSchema } from "@/lib/zodSchemas";
import { parseWithZod } from "@conform-to/zod";
import { eq } from "drizzle-orm";
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
    name: submission.value.name,
    description: submission.value.description,
    weight: submission.value.weight,
    imageUrl: submission.value.imageUrl,
    price: submission.value.price,
  });

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}

export async function updateProduct(prevState: unknown, formData: FormData) {
  const id = formData.get("id") as string;
  if (!id) {
    throw new Error("Product ID not found in form data.");
  }

  const submission = parseWithZod(formData, {
    schema: productSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await db
    .update(products)
    .set({
      name: submission.value.name,
      description: submission.value.description,
      weight: submission.value.weight,
      imageUrl: submission.value.imageUrl,
      price: submission.value.price,
    })
    .where(eq(products.id, id));

  revalidatePath(`/dashboard/products/${id}`);
  redirect("/dashboard/products");
}

export async function deleteProduct(formData: FormData) {
  const id = formData.get("id") as string;
  await db.delete(products).where(eq(products.id, id));

  redirect("/dashboard/products");
}
