import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import { sendEmail } from "@/utilities/SendEmails";
import { generateResetToken , generateResetTokenExpiry } from "@/utilities/tokenUtils"; // Example token generation function
import db from "@/utilities/db";

db();

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Generate reset token
    const resetToken = generateResetToken(user.id, user.email, user.username);
    const resetTokenExpiry = generateResetTokenExpiry()

    // Save the token and expiry time in the user record
    user.resetToken = resetToken;
    user.resetTokenExpiresAt = resetTokenExpiry;
    await user.save();

    // Send the reset email with the link containing the token
    const resetLink = `${process.env.URL}/reset-password/${resetToken}`;
    await sendEmail({
      email,
      emailType: "RESET",
      userId: user._id.toString(),
      resetLink
    });

    return NextResponse.json({ message: "Password reset link has been sent to your email" }, { status: 200 });
  } catch (error) {
    console.error("Error sending reset email:", error);
    return NextResponse.json({ message: "Error sending reset email", error }, { status: 500 });
  }
}
