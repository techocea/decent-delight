import { z } from "zod";

export const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  status: z.enum(["draft", "published", "archived"]),
  price: z.number().min(1),
  images: z.array(z.string()).min(1, "At least one image is required"),
  category: z.enum([
    "gateaux",
    "cake_jars",
    "cookies",
    "brownies",
    "cupcakes",
    "predesigned_mini_cakes",
    "predesigned_cakes",
    "sweet_table",
  ]),
  isMostDelicious:z.boolean().optional(),
});
