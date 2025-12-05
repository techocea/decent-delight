import { db } from "@/lib/db";
import { CheckoutSchema } from "@/lib/zodSchemas";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { addresses, orderItems, orders, products, users } from "@/lib/schema";
import { inArray } from "drizzle-orm";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log(body.addresses);
    const parsedData = CheckoutSchema.safeParse(body.addresses);
    if (!parsedData.success)
      return NextResponse.json(
        { success: false, message: "Invalid" },
        { status: 400 }
      );

    const { getUser } = getKindeServerSession();
    const authUser = await getUser();

    if (!authUser || !authUser.id) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

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

    await db
      .insert(users)
      .values({
        id: authUser.id,
        email: authUser.email!,
        password: null,
      })
      .onConflictDoNothing();

    //create order
    const [newOrder] = await db
      .insert(orders)
      .values({
        userId: authUser.id,
        status: "pending",
        totalPrice: productsDb.reduce((sum, p) => sum + p.price, 0),
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
