ALTER TABLE "addresses" RENAME COLUMN "full_name" TO "first_name";--> statement-breakpoint
ALTER TABLE "addresses" RENAME COLUMN "district" TO "last_name";--> statement-breakpoint
ALTER TABLE "addresses" ADD COLUMN "contact" text NOT NULL;--> statement-breakpoint
ALTER TABLE "addresses" ADD COLUMN "email" text NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "additional_information" text[] NOT NULL;--> statement-breakpoint
ALTER TABLE "addresses" DROP COLUMN "phone";