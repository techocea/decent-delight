import { db } from "@/lib/db";
import { inArray } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";
import { CheckoutSchema } from "@/lib/zodSchemas";
import { NextRequest, NextResponse } from "next/server";
import { addresses, orderItems, orders, products } from "@/lib/schema";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const parsedData = CheckoutSchema.safeParse(body.addresses);

    if (!parsedData.success)
      return NextResponse.json(
        { success: false, message: "Invalid" },
        { status: 400 }
      );

    const { isAuthenticated, userId } = await auth();

    if (!isAuthenticated) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    // await db
    //   .insert(users)
    //   .values({
    //     id: userId,
    //     email: user?.emailAddresses[0].emailAddress!,
    //     password: null,
    //   })
    //   .onConflictDoNothing();

    const cart = body.cart ?? [];
    if (cart.length === 0) {
      return NextResponse.json(
        { success: false, message: "Cart is empty" },
        { status: 400 }
      );
    }

    const productIds = cart.map((c: any) => c.product.id);

    const productsDb = await db
      .select()
      .from(products)
      .where(inArray(products.id, productIds));

    if (productsDb.length !== productIds.length) {
      return NextResponse.json(
        { success: false, message: "Some products not found" },
        { status: 400 }
      );
    }

    // calculate the total price
    const totalPrice = cart.reduce((sum: number, item: any) => {
      const product = productsDb.find((p) => p.id === item.product.id);
      if (!product) return sum;

      return sum + product.price * item.quantity;
    }, 0);

    //create order
    const [newOrder] = await db
      .insert(orders)
      .values({
        userId,
        totalPrice,
        paymentMode: body.paymentMode,
        status: "pending",
      })
      .returning();

    //inserting order items
    for (const item of cart) {
      await db.insert(orderItems).values({
        orderId: newOrder.id,
        productId: item.product.id,
        quantity: item.quantity,
      });
    }

    await db.insert(addresses).values({
      orderId: newOrder.id,
      ...parsedData.data,
    });

    return NextResponse.json(
      {
        success: true,
        orderId: newOrder.id,
        newOrder,
        message: "Order created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in checking out: ", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
