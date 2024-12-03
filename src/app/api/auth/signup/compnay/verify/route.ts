



import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import db from "@/utilities/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

db();

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  console.log("Full URL:", request.url);
  console.log("Email from URL:", email);

  const body = await request.json();
  const { otp } = body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }



    if (!user.otp) {
      return NextResponse.json(
        { message: "OTP is not available." },
        { status: 400 }
      );
    }
    if (!user.otpExpiry) {
      return NextResponse.json(
        { message: "OtpExpiry is not available." },
        { status: 400 }
      );
    }

    // Check if the OTP has expired
    const isOtpExpired = Date.now() > user.otpExpiry.getTime();
    if (isOtpExpired) {
      return NextResponse.json(
        { message: "OTP has expired." },
        { status: 400 }
      );
    }

    // Compare the OTP with the hashed OTP stored in the database
    const isOtpValid = await bcrypt.compare(otp.trim(), user.otp);
    console.log(isOtpValid)
    if (!isOtpValid) {
      return NextResponse.json(
        { message: "OTP Invalid." },
        { status: 400 }
      );
    }

    // Mark user as verified and save
    user.isVerified = true;
    try {
      await user.save();
    } catch (error) {
      console.error("Error updating user:", error);
      return NextResponse.json(
        { message: "Error updating user." },
        { status: 500 }
      );
    }

    console.log("Signup successful");

    // Create a token for the user
    const tokenSecret = process.env.TOKEN_SECRET;
    if (!tokenSecret) {
      console.error("TOKEN_SECRET environment variable is not set.");
      return NextResponse.json(
        { message: "Internal Server Error." },
        { status: 500 }
      );
    }

    try {
      const tokenData = { id: user._id, email: user.email, role: user.role };
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
      console.error("Error creating token:", error);
      return NextResponse.json(
        { message: "Error creating token." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json(
      { message: "Error verifying OTP." },
      { status: 500 }
    );
  }
}