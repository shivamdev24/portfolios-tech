import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User"; // Adjust the path to your User model
import db from "@/utilities/db"; // Ensure you have a database connection file

// Connect to the database
db();

// GET Portfolio by username from the URL query
export async function GET(req: NextRequest) {
  try {
    // Extract the username from the query parameters
    const { searchParams } = req.nextUrl; // Get the query parameters
    const username = searchParams.get("username"); // Get the username from the query

    if (!username) {
      return NextResponse.json({ success: false, message: "Username is required" }, { status: 400 });
    }

    // Find the user by username
    const user = await User.findOne({ username }); // Find the user based on the username

    if (!user) {
      return NextResponse.json({ success: false, message: "User  not found" }, { status: 404 });
    }

    // Assuming the Portfolio model has a userId or username field
    // const portfolio = await Portfolio.findOne({ userId: user._id }); // Find the portfolio based on userId
    const userportfolio = await User.findOne({ username }).populate("portfolio") // Find the portfolio based on userId

    if (!userportfolio) {
      return NextResponse.json({ success: false, message: "Portfolio not found for this user" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: {
      image_url: user.image_url,
      portfolio: userportfolio.portfolio,
    }, });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}