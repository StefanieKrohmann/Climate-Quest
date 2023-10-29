import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import UserQuest from "@/models/UserQuest";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const decodedToken = await jwt.verify(
    req.cookies.get("token").value,
    process.env.NEXTAUTH_SECRET
  );
  const quest = await req.json();
  try {
    await connectMongoDB();
    let user;

    try {
      user = await UserQuest.findOne({ userId: decodedToken.id });
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    if (user) {
      try {
        // const findQuest = await UserQuest.findOne({
        //   userId: decodedToken.id,
        //   quest: { $elemMatch: quest },
        // });

        // if (!findQuest) {
          // const updatedUser = 
          await UserQuest.findOneAndUpdate(
            { userId: decodedToken.id },
            { $push: { quest: quest } },
            { new: true }
          );
        // } else {
            // .....
        // }
      } catch (updateError) {
        return NextResponse.json(
          { error: updateError.message },
          { status: 400 }
        );
      }
    } else {
      try {
        await UserQuest.create({ userId: decodedToken.id, quest: quest });
      } catch (createError) {
        return NextResponse.json(
          { error: createError.message },
          { status: 400 }
        );
      }
    }

    return NextResponse.json({
      data: user,
    });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
export async function GET(req) {
  const decodedToken = await jwt.verify(
    req.cookies.get("token").value,
    process.env.NEXTAUTH_SECRET
  );
  try {
    await connectMongoDB();
    let user;

    try {
      user = await UserQuest.findOne({ userId: decodedToken.id });
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    if (user) {
      // The user with the provided ID exists.
      try {
        const userQuest = await UserQuest.find({ userId: decodedToken.id });
        return NextResponse.json(userQuest);
      } catch (updateError) {
        return NextResponse.json(
          { error: updateError.message },
          { status: 400 }
        );
      }
    } else {
      return NextResponse.json({
        data: "Not active quest",
      });
    }
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
