import mongoose, { Schema, Document } from "mongoose";

// Define the Portfolio interface
export interface IPortfolio extends Document {
  userId: mongoose.Schema.Types.ObjectId; // Reference to the user who owns this portfolio
  
  name: string; // Portfolio owner name
  bio: string; // Brief description or bio
  profileImage?: string; // Cloudinary URL for the profile image
  profileImagePublicId?: string; // Cloudinary public ID for the profile image
  contact: {
    email: string;
    phone?: string;
    address?: string;
  };
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
    extra?: string;
  };
  jobtitle: string;
  summery: string;
  skills: string[]; // Array of skills
  experiences: Array<{
    company: string;
    position: string;
    startDate: Date;
    endDate?: Date; // Optional for current job
    description?: string | string[]; // Either a paragraph or an array of points
  }>;
  projects: Array<{
    title: string;
    description: string | string[]; // Either a paragraph or an array of points
    technologies: string[];
    liveUrl?: string; // Optional link to the live project
    repoUrl?: string; // Optional link to the GitHub repo
    project_image?: string; // Optional project image URL
    project_public_id?: string;
  }>;
  blog: Array<{
    title: string;
    description: string | string[]; // Either a paragraph or an array of points
    liveUrl?: string; // Optional link to the live project
  }>;
  createdAt?: Date;
  updatedAt?: Date;
}

// Define the portfolio schema
const PortfolioSchema: Schema<IPortfolio> = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    
    name: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
   
    jobtitle: {
      type: String,
      required: true,
    },
    summery: {
      type: String,
      required: true,
    },
    contact: {
      email: { type: String, required: true },
      phone: { type: String },
      address: { type: String },
    },
    socialLinks: {
      github: { type: String },
      linkedin: { type: String },
      twitter: { type: String },
      website: { type: String },
      extra: { type: String },
    },
    skills: {
      type: [String],
      required: true,
    },
    experiences: [
      {
        company: { type: String, required: true },
        position: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date },
        description: { type: Schema.Types.Mixed }, // Allows string or array of strings
      },
    ],
    projects: [
      {
        title: { type: String, required: true },
        description: { type: Schema.Types.Mixed, required: true }, // Allows string or array of strings
        technologies: { type: [String], required: true },
        liveUrl: { type: String },
        repoUrl: { type: String },
       
      },
    ],
    blog: [
      {
        title: { type: String, required: true },
        description: { type: Schema.Types.Mixed, required: true }, // Allows string or array of strings
        liveUrl: { type: String },
      },
    ],
  },
  { timestamps: true } // Automatically add createdAt and updatedAt
);

// Create the Portfolio model
const Portfolio =
  mongoose.models.Portfolio || mongoose.model<IPortfolio>("Portfolio", PortfolioSchema);

export default Portfolio;
