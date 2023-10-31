import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "Logout successfull",
      success: true,
    });
    response.cookies.set("token", "", {
      httpOnly: true,
      maxAge: 0,
      expires: new Date(0),
      secure: true, // Ensure the cookie is only sent over HTTPS
      sameSite: "Strict", // Control cross-site request behavior
    });
    return response;
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
