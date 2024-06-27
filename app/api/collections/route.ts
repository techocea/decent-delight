import collection from "@/lib/models/collections";
import { connectToDB } from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs/server";
import { Collection } from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { RxCounterClockwiseClock } from "react-icons/rx";

export const POST = async (req: NextRequest) => {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }
    await connectToDB();

    const { title, description, image } = await req.json();

    const existingCollection = await collection.findOne({ title });

    if (existingCollection) {
      return new NextResponse("Collection Exists", { status: 400 });
    }

    if (!title || !image) {
      return new NextResponse("Title and Image is required", { status: 400 });
    }

    const newCollection = await collection.create({
      title,
      description,
      image,
    });
    await newCollection.save();
    return NextResponse.json(newCollection, { status: 200 });

  } catch (error) {
    console.log("[Collections_POST]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export const GET = async (req: NextRequest) => {
  try {
    await connectToDB();

    const collections = await collection.find().sort({ createdAt: "desc" });
    return NextResponse.json(collections, { status: 200 });
    
  } catch (error) {
    console.log("[Collections_GET]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
