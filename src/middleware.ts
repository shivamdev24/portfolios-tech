import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  let token: string | null = null;
  const authHeader = request.headers.get("Authorization");

  // Extract token from Authorization header or cookies
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  } else {
    token = request.cookies.get("token")?.value || "";
  }

  console.log("Path:", path);
  console.log("Token:", token);

  // Exclude auth/login and auth/signup routes from authentication
  if (path.startsWith("/auth/login") || path.startsWith("/auth/signup") || path.startsWith("/auth/reset-password")) {
    return NextResponse.next();
  }

  // Redirect to login if no token is present
  if (!token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  try {
    // Verify the JWT using jsonwebtoken
    const secret = process.env.TOKEN_SECRET as string;
    const payload = jwt.verify(token, secret) as jwt.JwtPayload;

    const userRole = payload.role;
    console.log("User Role:", userRole, payload);

    // Check user role and restrict access to specific paths
    if (path.startsWith("/admin") && userRole !== "admin") {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }

    if (path.startsWith("/company") && userRole !== "staff") {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }

    if (path.startsWith("/user") && userRole !== "user") {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
  } catch (error) {
    console.error("JWT verification error:", error);
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/user/:path*", "/company/:path*"],
};
