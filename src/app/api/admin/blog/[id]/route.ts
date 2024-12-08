import { NextRequest, NextResponse } from "next/server";
import db from "@/utilities/db";
import Blog from "@/models/Blog";


 db();


// Handle GET requests
export const GET = async (req: NextRequest) => {
  try {
    
    const slug = req.nextUrl.pathname.split("/").pop(); // Extract slug from URL path

    if (!slug) {
      return new NextResponse("Slug is required", { status: 400 });
    }

    const blogs = await Blog.findOne({ slug });

    if (!blogs) {
      return new NextResponse("Blog not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(blogs), { status: 200 });
  } catch (error) {
    return new NextResponse(`Error fetching blog: ${error}`, {
      status: 500,
    });
  }
};

export const PUT = async (req: NextRequest) => {
  try {

    // Extract slug from URL
    const slug = req.nextUrl.pathname.split("/").pop();
    if (!slug) {
      return new NextResponse("Slug is required", { status: 400 });
    }

    // Parse request body
    const body = await req.json();

    // Log for debugging
    console.log("Updating blog with slug:", slug);
    console.log("Request body:", body);

    // Find and update the blog post
    const updatedBlog = await Blog.findOneAndUpdate(
      { slug },
      { $set: body }, // Use $set to only update specified fields
      { new: true, runValidators: true }
    );

    // Check if the blog post was found and updated
    if (!updatedBlog) {
      return new NextResponse("Blog not found", { status: 404 });
    }

    // Return success response
    return new NextResponse(
      JSON.stringify({
        message: "Blog updated successfully",
        blog: updatedBlog,
      }),
      { status: 200 }
    );
  } catch (error) {
    // Log error for debugging
    console.error("Error updating blog:", error);

    // Return error response
    return new NextResponse(`Error updating blog: ${error}`, { status: 500 });
  }
};
// Handle DELETE requests
export const DELETE = async (req: NextRequest) => {
  try {
    
    const slug = req.nextUrl.pathname.split("/").pop(); // Extracting slug from URL

    if (!slug) {
      return new NextResponse("Slug is required", { status: 400 });
    }

    const deletedBlog = await Blog.findOneAndDelete({ slug });

    if (!deletedBlog) {
      return new NextResponse("Blog not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify({ message: "Blog deleted" }), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(`Error deleting blog: ${error}`, {
      status: 500,
    });
  }
};
