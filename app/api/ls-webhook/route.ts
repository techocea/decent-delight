import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { orders, payments, webhookEvents } from "@/lib/schema";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  const raw = await req.text(); // must use raw body for signature
  const signature = req.headers.get("x-signature") || "";

  const secret = process.env.LEMON_WEBHOOK_SECRET!;
  const expected = crypto
    .createHmac("sha256", secret)
    .update(raw)
    .digest("hex");

  if (!crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature))) {
    return new Response("Invalid signature", { status: 401 });
  }

  // parse after verifying signature
  const payload = JSON.parse(raw);
  // store webhook
  await db.insert(webhookEvents).values({
    eventType: payload.meta?.event_name || payload.event,
    payload: payload,
  });

  // Example: handle order_created or subscription events
  if (
    payload.meta?.event_name === "order_created" ||
    payload.event === "order_created"
  ) {
    // find your local order id in payload.data?.meta?.custom_data.order_id
    const localOrderId =
      payload.meta?.custom_data?.order_id ||
      payload.data?.meta?.custom_data?.order_id;
    // mark order as paid/confirmed or create payments record
    await db.insert(payments).values({
      orderId: localOrderId,
      provider: "lemonsqueezy",
      providerPaymentId: payload.data?.id,
      amount: Number(payload.data?.attributes?.total ?? 0), // adapt field path
      status: "paid",
      rawPayload: payload,
    });
    await db
      .update(orders)
      .set({ status: "PAID", lemonOrderId: payload.data?.id })
      .where(eq(orders.id, localOrderId));
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
