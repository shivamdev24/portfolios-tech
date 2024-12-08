import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import db from "@/utilities/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

db();

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and password are required." },
      { status: 400 }
    );
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password." },
        { status: 401 }
      );
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid email or password." },
        { status: 401 }
      );
    }

    // Check if the user is verified
    // if (!user.isVerified) {
    //   return NextResponse.json(
    //     { message: "Account is not verified. Please verify your email." },
    //     { status: 403 }
    //   );
    // }

    const tokenSecret = process.env.TOKEN_SECRET;
    if (!tokenSecret) {
      console.error("TOKEN_SECRET environment variable is not set.");
      return NextResponse.json(
        { message: "Internal Server Error." },
        { status: 500 }
      );
    }

    
      const tokenData = { id: user._id, email: user.email, role: user.role, portfolio: user.portfolio };
      const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!);

      const response = NextResponse.json(
        { message: "Signup successful.", tokenData, token },
        { status: 200 }
      );

     response.cookies.set("token", token, {
       httpOnly: true,
       secure: process.env.NODE_ENV === "production",
       sameSite: "strict",
     });
    

    return response;
  } catch (error) {
    console.error("Error logging in:", error);
    return NextResponse.json(
      { message: "Error logging in", error },
      { status: 500 }
    );
  }
}
