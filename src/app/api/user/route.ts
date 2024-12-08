import { NextRequest, NextResponse } from "next/server";
// import Portfolio from "@/models/PortfolioInfo"; // Adjust the path to your Portfolio model
import User from "@/models/User"; // Adjust the path to your User model
import db from "@/utilities/db"; // Ensure you have a database connection file

// Connect to the database
db();

// GET All Users and Their Portfolios
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest) {
  try {
    // Fetch all users and populate their portfolio reference
    const users = await User.find().populate("portfolio"); // Ensure "portfolio" is defined as a reference in your User schema

    // If no users are found
    if (!users.length) {
      return NextResponse.json(
        {
          success: false,
          message: "No users found",
        },
        { status: 404 }
      );
    }

    // // Format the response
    // const userData = users.map((user) => ({
    //   name: user.name,
    //   email: user.email,
    //   username: user.username,
    //   phoneNumber: user.phoneNumber,
    //   address: user.address,
    //   image_url: user.image_url,
    //   role: user.role,
    //   preferences: user.preferences,
    //   socialLinks: user.socialLinks,
    //   portfolio: user.portfolio, // Populated portfolio data
    // }));

    return NextResponse.json({
      success: true,
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      {
        success: false,
        error,
      },
      { status: 500 }
    );
  }
}
