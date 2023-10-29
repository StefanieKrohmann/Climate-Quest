
import jwt from "jsonwebtoken";

export const getDataFromToken = (request) => {
  try {
    const token = request.cookies.get("token")?.value || "";

    const decodedToken = jwt.verify(token, process.env.NEXTAUTH_SECRET);
    return decodedToken.id;
  } catch (e) {
    throw new Error(e.message);
  }
};
