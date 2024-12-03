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

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role , portfolio: user.portfolio},
      process.env.TOKEN_SECRET!
    );

    return NextResponse.json(
      {
        message: "Login successful!",
        token,
        user: { id: user._id, email: user.email, role: user.role , portfolio: user.portfolio},
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error logging in:", error);
    return NextResponse.json(
      { message: "Error logging in", error },
      { status: 500 }
    );
  }
}
