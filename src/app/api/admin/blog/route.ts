// import { NextRequest, NextResponse } from "next/server";
// import { dbConnect } from "@/dbConfig/dbConfig"; // Adjust path as needed
// import Blog from "@/models/blogModel"; // Adjust path as needed

// export const GET = async (req: NextRequest) => {
//   try {
//     await dbConnect();
//     const blogs = await Blog.find();
//     return new NextResponse(JSON.stringify(blogs), { status: 200 });
//   } catch (error) {
//     return new NextResponse(`Error in fetching blogs: ${error}`, {
//       status: 500,
//     });
//   }
// };

// export const POST = async (req: NextRequest) => {
//   try {
//     await dbConnect();
//     const body = await req.json();

//     const newBlog = new Blog(body);
//     await newBlog.save();

//     return new NextResponse(
//       JSON.stringify({ message: "Blog created", blog: newBlog }),
//       { status: 201 }
//     );
//   } catch (error) {
//     return new NextResponse(`Error in creating blog: ${error}`, {
//       status: 500,
//     });
//   }
// };

import { NextRequest, NextResponse } from "next/server";
import db from "@/utilities/db";
import Blog from "@/models/Blog"; // Adjust path as needed

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GET = async (req: NextRequest) => {
    try {
      await db();
    const blogs = await Blog.find().exec(); // Ensure to call exec() for proper query execution
    return new NextResponse(JSON.stringify(blogs), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in fetching blogs:", error); // For debugging
    return new NextResponse(
      JSON.stringify({
        message: "Error in fetching blogs",
        error: error,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await db();
    const body = await req.json();

    // Validate body data
    if (!body.title || !body.content || !body.slug) {
      return new NextResponse(
        JSON.stringify({
          message: "Missing required fields: title, content, or slug",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const newBlog = new Blog(body);
    await newBlog.save();

    return new NextResponse(
      JSON.stringify({ message: "Blog created", blog: newBlog }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in creating blog:", error); // For debugging
    return new NextResponse(
      JSON.stringify({
        message: "Error in creating blog",
        error: error,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
