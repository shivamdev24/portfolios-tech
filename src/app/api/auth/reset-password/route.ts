import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import db from "@/utilities/db";
import { verifyResetToken } from "@/utilities/tokenUtils";

db();

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    const token = request.headers.get("Authorization")?.replace("Bearer ", "");

    // Validate inputs
    if (!token || !password) {
      return NextResponse.json(
        { message: "Token and password are required" },
        { status: 400 }
      );
    }

    // Verify the token and extract payload
    const payload = verifyResetToken(token);
    if (payload) {
      console.log("User  ID:", payload.userId);
      console.log("User  Email:", payload.email);
      console.log("User  Name:", payload.name);
    }
    if (!payload ) {
      return NextResponse.json(
        { message: "Invalid or expired token" },
        { status: 400 }
      );
    }
    console.log("payload",payload)

    const userId = payload.userId;

    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json(
        { message: "User  not found" },
        { status: 404 }
      );
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10); // Consider making salt rounds configurable

    // Update user's password and clear reset token fields
    user.password = hashedPassword;
    user.resetToken = undefined; // Ensure these fields exist in your User model
    user.resetTokenExpiresAt = undefined;
    await user.save();

    return NextResponse.json(
      { message: "Password has been reset successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error resetting password:", error);
    return NextResponse.json(
      { message: "Error resetting password" }, // Avoid exposing error details
      { status: 500 }
    );
  }
}