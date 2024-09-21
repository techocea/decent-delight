import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getKindeServerSession(); // Ensure the session is awaited
    const user = await session.getUser(); // Make sure user is fetched from session

    if (!user) {
      return NextResponse.json(
        { error: "User not found in session" },
        { status: 401 }
      );
    }

    // Check if the user exists in the database
    let dbUser = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });

    // Create the user if not found in the database
    if (!dbUser) {
      dbUser = await prisma.user.create({
        data: {
          id: user.id,
          firstName: user.given_name ?? "",
          lastName: user.family_name ?? "",
          email: user.email ?? "",
          profileImage: user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
        },
      });
    }

    // Redirect to the dashboard
    const dashboardUrl = process.env.DASHBOARD_URL || "http://localhost:3000";
    return NextResponse.redirect(`${dashboardUrl}/dashboard`);
  } catch (error) {
    console.error("Error in GET /api/auth/creation:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
