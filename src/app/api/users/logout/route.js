import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "Logout successfull",
      success: true,
    });
    
    response.cookies.set("token", "", { httpOnly: true });
    return response;
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}


// export const deleteCookie = (
//   request: NextRequest,
//   response: NextResponse,
//   cookie: string
// ) => {
//   const { value, options } = request.cookies.getWithOptions(cookie);
//   if (value) {
//     response.cookies.set(cookie, value, options);
//     response.cookies.delete(cookie);
//   }
// };