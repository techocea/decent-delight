import * as z from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Name cannot be empty"),
  description: z.string().min(1, "Description cannot be empty"),
  price: z.coerce.number().min(1, "Price must be at least 1"),
  imageUrl: z
    .string()
    .url("Must be a valid URL")
    .min(1, "Image URL is required"),
  weight: z.string().min(1, "Weight is required"),
});

export type ProductSchemaType = z.infer<typeof productSchema>;

export const CheckoutSchema = z.object({
  firstName: z.string().min(3, "First Name has to be filled"),
  lastName: z.string().min(3, "Last Name has to be filled"),
  contact: z
    .string()
    .max(10, "Contact should contain 10 digits")
    .min(10, "Contact has to be filled"),
  street: z.string().min(3, "Street has to be filled"),
  city: z.string().min(2, "City has to be filled"),
  postalCode: z.string().min(3, "Postal Code has to be filled"),
  email: z.email().max(32, "Email has to be filled"),
  paymentMode: z.enum(["online", "cash"]),
});

export type CheckoutSchemaType = z.infer<typeof CheckoutSchema>;
