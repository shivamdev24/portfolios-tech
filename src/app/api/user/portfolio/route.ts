import { NextRequest, NextResponse } from "next/server";
import Portfolio from "@/models/PortfolioInfo"; // Adjust the path to your Portfolio model
import User from "@/models/User"; // Adjust the path to your Portfolio model
import db from "@/utilities/db"; // Ensure you have a database connection file
import  jwt,{ JwtPayload}  from "jsonwebtoken";



// Connect to the database
db();



const verifyToken = (request: NextRequest) => {
    const authHeader = request.headers.get("Authorization");
    let token: string | null = null;
  
    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    } else {
      token = request.cookies.get("token")?.value || null;
    }
  
    if (!token) {
      throw new Error("Authorization token is required.");
    }
  
    try {
      const decoded = jwt.verify(
        token,
        process.env.TOKEN_SECRET || "default_secret_key"
      );
  
      if (typeof decoded !== "string") {
        return decoded as JwtPayload;
      }
    } catch (error) {
      throw new Error("Invalid token.", { cause: error });
    }
  };







// CREATE a Portfolio
export async function POST(req: NextRequest) {
    try {
      // Verify the token and extract user ID
      const tokenPayload = verifyToken(req);
      const userId = tokenPayload?.id; // Ensure the token contains a `userId` field
      const portfolioId = tokenPayload?.portfolio; // Ensure the token contains a `userId` field
  
      if (!userId) {
        return NextResponse.json(
          { success: false, message: "User ID is missing in the token." },
          { status: 400 }
        );
      }
  
      if(portfolioId){
        return NextResponse.json(
          { success: false, message: "Already have an portfolio" },
          { status: 404 }
        );
      }

      // Parse the request body
      const body = await req.json();
  
      // Add the userId to the portfolio data
      const portfolioData = { ...body, userId };
  
      // Create the portfolio
      const portfolio = await Portfolio.create(portfolioData);
  
      // Update the user model with the portfolio ID
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { portfolio: portfolio._id }, // Add the portfolio ID to the user's `portfolio` field
        { new: true } // Return the updated user document
      );
  
      if (!updatedUser) {
        return NextResponse.json(
          { success: false, message: "User not found or update failed." },
          { status: 404 }
        );
      }
  
      // Respond with the created portfolio
      return NextResponse.json({ success: true, data: portfolio }, { status: 201 });
    } catch (error) {
      return NextResponse.json(
        { success: false,  error},
        { status: 500 }
      );
    }
  }




// GET Portfolio by user ID from the token

export async function GET(req: NextRequest) {

    try {
  
      const tokenPayload = verifyToken(req); // Assuming the token contains the user info
  
      const userId = tokenPayload?.id; // Extracting userId from the token payload
  
      console.log(userId)
  
      if (!userId) {
  
        return NextResponse.json({ success: false, message: "Invalid or missing token" }, { status: 400 });
  
      }
  
  
      // Query the Portfolio collection where userId matches the token's userId
  
      const portfolio = await Portfolio.findOne({ userId }).populate("userId"); // Use findOne to find by userId
  
  
      if (!portfolio) {
  
        return NextResponse.json({ success: false, message: "Portfolio not found for this user" }, { status: 404 });
  
      }
  
  
      return NextResponse.json({ success: true, data: portfolio });
  
    } catch (error) {
  
      return NextResponse.json({ success: false,  error }, { status: 500 });
  
    }
  
  }



  

// UPDATE (PATCH) a Portfolio by ID
export async function PATCH(req: NextRequest) {
  

  try {
    const tokenPayload = verifyToken(req); // Assuming the token contains the user info
    console.log("Token Payload:", tokenPayload);

    const id = tokenPayload?.portfolio; // Replace with the correct key
    console.log("portfolio ID:", id);

    
    if (!id) {
      return NextResponse.json({ success: false, message: "ID is required for updating" }, { status: 400 });
    }

    const body = await req.json();
    const portfolio = await Portfolio.findByIdAndUpdate({id}, body, { new: true });
    if (!portfolio) {
      return NextResponse.json({ success: false, message: "Portfolio not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: portfolio });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}


// DELETE a Portfolio by ID
export async function DELETE(req: NextRequest) {
 
  try {
    const tokenPayload = verifyToken(req); // Assuming the token contains the user info
    console.log("Token Payload:", tokenPayload);

    const id = tokenPayload?.portfolio; // Replace with the correct key
    console.log("User ID:", id);

    
    if (!id) {
      return NextResponse.json({ success: false, message: "ID is required for updating" }, { status: 400 });
    }

    const portfolio = await Portfolio.findByIdAndDelete(id);
    if (!portfolio) {
      return NextResponse.json({ success: false, message: "Portfolio not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Portfolio deleted successfully" });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
