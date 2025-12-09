import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { orderId, userId, product } = await req.json();

    const body = {
      data: {
        type: "checkouts",
        attributes: {
          variant_id: product.lemonVariantId,
          return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success`,
          meta: {
            custom_data: {
              order_id: orderId,
              user_id: userId,
            },
          },
        },
      },
    };

    const res = await fetch("https://api.lemonsqueezy.com/v1/checkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/vnd.api+json",
        Authorization: `Bearer ${process.env.LEMONSQUEEZY_API_KEY}`,
      },
      body: JSON.stringify(body),
    });

    const json = await res.json();

    const checkoutUrl = json?.data?.attributes?.url;
    console.log(checkoutUrl);
    if (!checkoutUrl) {
      console.log("LemonSqueezy did not return URL", json);
      return NextResponse.json(
        { success: false, message: "Could not create checkout URL", json },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, url: checkoutUrl });
  } catch (error) {
    console.log("Error in LS checkout:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
