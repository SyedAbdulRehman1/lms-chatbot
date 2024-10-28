import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createDefaultTeacherUser } from "./prisma/initUser";

const PROTECTED_ROUTES = ["/dashboard", "/admin", "/profile"];

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.SECRET });
  const { pathname } = req.nextUrl;

  // If user is trying to access the auth page and is already logged in
  // if (token && pathname.includes("/auth")) {
  //   return NextResponse.redirect(new URL("/login", req.url)); // Redirect to dashboard
  // }

  // If user is trying to access a protected route and is not logged in
  if (!token && PROTECTED_ROUTES.includes(pathname)) {
    // Replace with your protected routes pattern
    return NextResponse.redirect(new URL("/auth", req.url)); // Redirect to sign-in
  }
  // await createDefaultTeacherUser();
  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/:path*", "/", "/(api|trpc)(.*)"],
};
