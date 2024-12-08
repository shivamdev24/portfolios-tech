import mongoose, { Schema, Document } from "mongoose";

interface IBlog extends Document {
  title: string;
  content: string;
  author: string;
  tags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
  slug: string;
  image?: string; // Add image field to store image URL
}

const BlogSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },

    image: {
      type: String,
      required: false,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }, // Update timestamps option
  }
);

const Blog = mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);

export default Blog;
