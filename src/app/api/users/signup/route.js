import connect from "@/libs/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { username, password } = reqBody;
    // user already axists:

    const user = await User.findOne({ username });
    if (user) {
      return NextResponse.json(
        { error: "Username already exists" },
        { status: 400 }
      );
    }

    // hash password

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({ username, password: hashedPassword });

    // save
    const savedUser = await newUser.save();

    // // create token data
    // const tokenData = {
    //   id: newUser._id,
    //   username: newUser.username,
    // };

    // // create a token
    // const token = await jwt.sign(tokenData, process.env.NEXTAUTH_SECRET, {
    //   expiresIn: "1d",
    // });

    // const response = NextResponse.json({
    //   message: "Login successfull",
    //   success: true,
    // });
    // response.cookies.set("token", token, { httpOnly: true });

    // return response;
    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
