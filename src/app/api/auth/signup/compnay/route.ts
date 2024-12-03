import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/utilities/SendEmails";
import User from "@/models/User";
import db from "@/utilities/db";
import { generateOtp, getOtpExpiry } from "@/utilities/OtpGenerate";
import bcrypt from "bcryptjs";

db();

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;

  // Validate required fields
  if (!email || !password) {
    return NextResponse.json(
      { message: "Email, password, and role are required." },
      { status: 400 }
    );
  }



  try {
    const existingUser  = await User.findOne({ email });

    // Check if user already exists
    if (existingUser ) {
      if (existingUser.isVerified) {
        return NextResponse.json(
          { message: "User  already exists and is verified." },
          { status: 400 }
        );
      } else {
        // User exists but is not verified, send new OTP
        const otp = generateOtp();
        const hashedOtp = await bcrypt.hash(otp, 10);
        const otpExpiry = getOtpExpiry(10);

        await User.findByIdAndUpdate(existingUser._id, {
          otp: hashedOtp,
          otpExpiry,
        });

        await sendEmail({
          email,
          emailType: "SIGNUP OTP",
          userId: existingUser._id.toString(),
          otp,
        });

        return NextResponse.json(
          {
            message: "User  exists but is not verified. A new verification email has been sent.",
          },
          { status: 200 }
        );
      }
    }

   

    // Create a new user
    const otp = generateOtp();
    const hashedPassword = await bcrypt.hash(password, 10);
    const hashedOtp = await bcrypt.hash(otp, 10);
    const otpExpiry = getOtpExpiry(10);

    const newUser  = new User({
      email,
      role:"company",
      otp: hashedOtp,
      password: hashedPassword,
      otpExpiry,
      resetToken:undefined,
      resetTokenExpiresAt:undefined,
    });

    await newUser .save();

    // Send OTP email
    await sendEmail({
      email,
      emailType: "SIGNUP OTP",
      userId: newUser._id.toString(),
      otp,
      
    });

    return NextResponse.json(
      { message: "OTP sent successfully to your mail!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error signing up user:", error);
    return NextResponse.json(
      { message: "Error signing up user", error },
      { status: 500 }
    );
  }
}