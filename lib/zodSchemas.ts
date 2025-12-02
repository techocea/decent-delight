import * as z from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Name cannot be empty"),
  description: z.string().min(1, "Description cannot be empty"),
  price: z.coerce.number().min(1, "Price must be at least 1"),
  imageUrl: z.string().url("Must be a valid URL").min(1, "Image URL is required"), 
  weight: z.string().min(1, "Weight is required"),
});

export type ProductSchemaType = z.infer<typeof productSchema>;