import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Quests from "@/models/Quests";

export async function GET() {
    try {
    await connectMongoDB();
    const allQuest = await Quests.find({});
    return NextResponse.json({
      data: allQuest,
    });


  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
