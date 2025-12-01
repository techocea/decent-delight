import { integer, pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["user", "admin"]);

export const users = pgTable("users", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  role: roleEnum("role").default("user").notNull(),

  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const products = pgTable("products", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(),
  price: integer("price").notNull(),
  description: text("description").notNull(),
  weight: text("weight").notNull(),
  imageUrl: text("image_url").notNull(),

  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const orders = pgTable("orders", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),

  userId: text("user_id").references(() => users.id),
  
  totalPrice: integer("total_price").notNull(),
  status: text("status").default("pending").notNull(),

  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const addresses = pgTable("addresses", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),

  orderId: text("order_id")
    .references(() => orders.id)
    .notNull(),

  fullName: text("full_name").notNull(),
  street: text("street").notNull(),
  city: text("city").notNull(),
  district: text("district").notNull(),
  postalCode: text("postal_code").notNull(),
  phone: text("phone").notNull(),
});