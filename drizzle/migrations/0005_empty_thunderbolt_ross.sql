CREATE TABLE "payments" (
	"id" text PRIMARY KEY NOT NULL,
	"order_id" text,
	"provider" text NOT NULL,
	"provider_payment_id" text,
	"amount" integer NOT NULL,
	"status" text NOT NULL,
	"raw_payload" json,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "webhook_events" (
	"id" text PRIMARY KEY NOT NULL,
	"event_type" text NOT NULL,
	"payload" json,
	"received_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "lemon_order_id" text;--> statement-breakpoint
ALTER TABLE "payments" ADD CONSTRAINT "payments_order_id_orders_id_fk" FOREIGN KEY ("order_id") REFERENCES "public"."orders"("id") ON DELETE no action ON UPDATE no action;