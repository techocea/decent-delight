import {
  integer,
  json,
  pgEnum,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["user", "admin"]);

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  password: text("password"),
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
  additionalInfo: text("additional_information").array().notNull(),
  weight: text("weight").notNull(),
  imageUrl: text("image_url").notNull(),
  
  lemonVariantId: integer("lemon_variant_id").notNull(),
  
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
  paymentMode: text("payment_mode").notNull(),
  status: text("status").default("pending").notNull(),

  lemonOrderId: text("lemon_order_id"),

  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const orderItems = pgTable("orderItems", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),

  orderId: text("order_id").references(() => orders.id, {
    onDelete: "cascade",
  }),
  productId: text("product_id").references(() => products.id),
  quantity: integer("quantity").notNull(),

  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const addresses = pgTable("addresses", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),

  orderId: text("order_id")
    .references(() => orders.id)
    .notNull(),

  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  street: text("street").notNull(),
  city: text("city").notNull(),
  contact: text("contact").notNull(),
  postalCode: text("postal_code").notNull(),
  email: text("email").notNull(),
});

export const payments = pgTable("payments", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  orderId: text("order_id").references(() => orders.id),
  provider: text("provider").notNull(), // 'lemonsqueezy'
  providerPaymentId: text("provider_payment_id"),
  amount: integer("amount").notNull(),
  status: text("status").notNull(),
  rawPayload: json("raw_payload").$type<unknown>(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const webhookEvents = pgTable("webhook_events", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  eventType: text("event_type").notNull(),
  payload: json("payload").$type<unknown>(),
  receivedAt: timestamp("received_at").defaultNow(),
});
