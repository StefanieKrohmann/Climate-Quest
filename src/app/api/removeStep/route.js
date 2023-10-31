import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import UserQuest from "@/models/UserQuest";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const decodedToken = await jwt.verify(
    req.cookies.get("token").value,
    process.env.NEXTAUTH_SECRET
  );
  const questId = await req.json();
  try {
    await connectMongoDB();
    let user;

    try {
      const updateStep = await UserQuest.findOne({ userId: decodedToken.id });
      if (updateStep) {
        const questIndex = updateStep.quest.findIndex(
          (q) => q.uuid === questId
        );
        if (questIndex !== -1) {
          updateStep.quest[questIndex].steps--;
          await updateStep.save();
        }
      }

      return NextResponse.json({ success: true });
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
