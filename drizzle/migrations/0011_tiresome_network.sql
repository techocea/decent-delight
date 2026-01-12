ALTER TABLE "products" DROP CONSTRAINT "products_order_id_orders_id_fk";
--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "order_id";