// import { NextRequest, NextResponse } from "next/server";
// import User from "@/models/User";
// import db from "@/utilities/db";

// db(); // Connect to the database

// export async function POST(req: NextRequest) {
//   try {
//     // Parse the body
//     const body = await req.json();

//     // Extract the query from the request body
//     const { query } = body; // Only use one query field

//     if (!query) {
//       return NextResponse.json(
//         { success: false, message: "Query parameter is required." },
//         { status: 400 }
//       );
//     }

//     // Dynamically construct the query object
//     const regexQuery = new RegExp(query, "i"); // Case-insensitive search
//     const searchQuery = {
//       $or: [
//         { name: { $regex: regexQuery } },
//         { username: { $regex: regexQuery } },
//         { email: { $regex: regexQuery } },
//         { phoneNumber: { $regex: regexQuery } },
//         { yearexperience: { $regex: regexQuery } },
//         { address: { $regex: regexQuery } },
//         { "preferences.industry": { $regex: regexQuery } },
//         { "preferences.location": { $regex: regexQuery } },
//         { "preferences.experienceLevel": { $regex: regexQuery } },
//         { "preferences.jobType": { $regex: regexQuery } },
//         { "preferences.skills": { $regex: regexQuery } },
//         { availabilityStatus: { $regex: regexQuery } },
//         { "socialLinks.linkedin": { $regex: regexQuery } },
//         { "socialLinks.github": { $regex: regexQuery } },
//         { "socialLinks.portfolio": { $regex: regexQuery } },
//         { "education.degree": { $regex: regexQuery } },
//         { "education.institution": { $regex: regexQuery } },
//         { "experience.title": { $regex: regexQuery } },
//         { "experience.company": { $regex: regexQuery } },
//         { "experience.description": { $regex: regexQuery } },
//         { "companyDetails.companyName": { $regex: regexQuery } },
//         { "companyDetails.website": { $regex: regexQuery } },
//         { "companyDetails.address": { $regex: regexQuery } },
//         { "companyDetails.contactNumber": { $regex: regexQuery } },
//         { companySize: { $regex: regexQuery } },
//         { industries: { $regex: regexQuery } }, // Array field
//         { description: { $regex: regexQuery } },
//         { logoUrl: { $regex: regexQuery } },
//       ],
//     };
    

//     // Fetch users based on the search query
//     const users = await User.find(searchQuery).populate("portfolio");

//     if (!users.length) {
//       return NextResponse.json(
//         { success: false, message: "Not found matching the query." },
//         { status: 404 }
//       );
//     }

//     // Return matching users
//     return NextResponse.json({
//       success: true,
//       data: users.map((user) => ({
//         _id: user._id,
//         name: user.name,
//         username: user.username,
//         email: user.email,
//         phoneNumber: user.phoneNumber,
//         yearexperience: user.yearexperience,
//         address: user.address,
//         preferences: user.preferences,
//         socialLinks: user.socialLinks,
//         availabilityStatus: user.availabilityStatus,
//         portfolio: user.portfolio, // Populated portfolio data
//         companyDetails: user.companyDetails,
//         education: user.education,
//         experience: user.experience,
//       })),
//     });
//   } catch (error) {
//     console.error("Error in search API:", error);
//     return NextResponse.json(
//       { success: false, error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }


import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import db from "@/utilities/db";

db(); // Connect to the database

export async function POST(req: NextRequest) {
  try {
    // Parse the body
    const body = await req.json();

    // Extract the query from the request body
    const { query, page = 1, limit = 50 } = body; // Default to page 1 and limit 10 if not provided

    if (!query) {
      return NextResponse.json(
        { success: false, message: "Query parameter is required." },
        { status: 400 }
      );
    }

    // Dynamically construct the query object
    const regexQuery = new RegExp(query, "i"); // Case-insensitive search
    const searchQuery = {
      $or: [
        { name: { $regex: regexQuery } },
        { username: { $regex: regexQuery } },
        { email: { $regex: regexQuery } },
        { phoneNumber: { $regex: regexQuery } },
        { yearexperience: { $regex: regexQuery } },
        { address: { $regex: regexQuery } },
        { "preferences.industry": { $regex: regexQuery } },
        { "preferences.location": { $regex: regexQuery } },
        { "preferences.experienceLevel": { $regex: regexQuery } },
        { "preferences.jobType": { $regex: regexQuery } },
        { "preferences.skills": { $regex: regexQuery } },
        { availabilityStatus: { $regex: regexQuery } },
        { "socialLinks.linkedin": { $regex: regexQuery } },
        { "socialLinks.github": { $regex: regexQuery } },
        { "socialLinks.portfolio": { $regex: regexQuery } },
        { "education.degree": { $regex: regexQuery } },
        { "education.institution": { $regex: regexQuery } },
        { "experience.title": { $regex: regexQuery } },
        { "experience.company": { $regex: regexQuery } },
        { "experience.description": { $regex: regexQuery } },
        { "companyDetails.companyName": { $regex: regexQuery } },
        { "companyDetails.website": { $regex: regexQuery } },
        { "companyDetails.address": { $regex: regexQuery } },
        { "companyDetails.contactNumber": { $regex: regexQuery } },
        { companySize: { $regex: regexQuery } },
        { industries: { $regex: regexQuery } }, // Array field
        { description: { $regex: regexQuery } },
        { logoUrl: { $regex: regexQuery } },
      ],
    };

   // Fetch users based on the search query and paginate
   const totalUsers = await User.countDocuments(searchQuery); // Get the total count based on search query
   const users = await User.find(searchQuery)
     .skip((page - 1) * limit) // Skip results based on the page number
     .limit(limit); // Limit results per page
     console.log("total", totalUsers)
     console.log("totalSearch",users)

   if (!users.length) {
     return NextResponse.json(
       { success: false, message: `No users found matching '${query}'` },
       { status: 404 }
     );
   }

   // Return matching users with pagination info
   return NextResponse.json({
     success: true,
     data: users,
     page,
     limit,
     totalUsers, // Include total users count in the response
   });
  } catch (error) {
    console.error("Error in search API:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
