import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(),
  price: integer("price").notNull(),
  description: text("description").notNull(),
  weight: text("weight").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const users = pgTable("users",{
    id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
    email: text("email").notNull().unique(),
    password: text("password").notNull(),
    
})
