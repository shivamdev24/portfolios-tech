// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import jwt from "jsonwebtoken";

// export async function middleware(request: NextRequest) {
//   const path = request.nextUrl.pathname;
//   const authHeader = request.headers.get("Authorization");
//   let token: string | null = null;

//   // Extract token from Authorization header or cookies
//   if (authHeader && authHeader.startsWith("Bearer ")) {
//     token = authHeader.split(" ")[1];
//   } else {
//     token = request.cookies.get("token")?.value || "";
//   }

//   console.log("Path:", path); // Consider removing in production
//   console.log("Token:", token); // Consider removing in production

//   // Exclude auth/login and auth/signup routes from authentication
//   if (path.startsWith("/login") || path.startsWith("/signup") || path.startsWith("/reset-password")) {
//     return NextResponse.next();
//   }

//   // Redirect to login if no token is present
//   if (!token) {
//     return NextResponse.redirect(new URL("/login", request.nextUrl));
//   }

  

//   try {
//     // Verify the JWT using jsonwebtoken
//     if (!process.env.TOKEN_SECRET) {
//       throw new Error("TOKEN_SECRET is not defined in environment variables.");
//     }

//     const payload = jwt.verify(token, process.env.TOKEN_SECRET) as jwt.JwtPayload;

//     if (payload.exp && Date.now() >= payload.exp * 1000) {
//       throw new Error("Token has expired.");
//     }

//     const userRole = payload.role;
//     console.log("User Role:", userRole); // Consider removing in production

//     // Check user role and restrict access to specific paths
//     if (path.startsWith("/admin") && userRole !== "admin") {
//       return NextResponse.redirect(new URL("/login", request.nextUrl));
//     }

//     if (path.startsWith("/company") && userRole !== "staff") {
//       return NextResponse.redirect(new URL("/login", request.nextUrl));
//     }

//     if (path.startsWith("/user") && userRole !== "user") {
//       return NextResponse.redirect(new URL("/login", request.nextUrl));
//     }
//   } catch (error) {
//     console.error("JWT verification error:", error);
//     return NextResponse.redirect(new URL("/login?error=token_expired", request.nextUrl));
    
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/","/admin/:path*", "/user/:path*", "/company/:path*"],
// };




import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const authHeader = request.headers.get("Authorization");
  let token: string | null = null;

  // Extract token from Authorization header or cookies
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  } else {
    token = request.cookies.get("token")?.value || "";
  }

  console.log("Path:", path); // Consider removing in production
  console.log("Token:", token); // Consider removing in production

  // Exclude auth/login and auth/signup routes from authentication
  if (path.startsWith("/login") || path.startsWith("/signup") || path.startsWith("/reset-password")) {
    return NextResponse.next();
  }

  // Redirect to login if no token is present
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  try {
    // Verify the JWT using `jose`
    if (!process.env.TOKEN_SECRET) {
      throw new Error("TOKEN_SECRET is not defined in environment variables.");
    }

    const secret = new TextEncoder().encode(process.env.TOKEN_SECRET);

    const { payload } = await jwtVerify(token, secret);

    const userRole = payload.role;
    console.log("User Role:", userRole); // Consider removing in production

    // Check user role and restrict access to specific paths
    if (path.startsWith("/admin") && userRole !== "admin") {
      return NextResponse.redirect(new URL("/login", request.nextUrl));
    }

    if (path.startsWith("/company") && userRole !== "staff") {
      return NextResponse.redirect(new URL("/login", request.nextUrl));
    }

    if (path.startsWith("/user") && userRole !== "user") {
      return NextResponse.redirect(new URL("/login", request.nextUrl));
    }
  } catch (error) {
    console.error("JWT verification error:", error);
    return NextResponse.redirect(new URL("/login?error=token_expired", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/admin/:path*", "/user/:path*", "/company/:path*"],
};
