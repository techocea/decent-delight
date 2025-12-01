import * as z from "zod";

export const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().min(1),
  imageUrl: z.string().min(1),
  weight: z.string(),
});
