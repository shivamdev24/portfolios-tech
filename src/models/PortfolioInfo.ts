import mongoose, { Schema, Document } from "mongoose";
// import User from "./User";

// Define the Portfolio interface
export interface IPortfolio extends Document {
  userId: mongoose.Schema.Types.ObjectId; // Reference to the user who owns this portfolio
  title: string; // Portfolio title
  bio: string; // Brief description or bio
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
  };
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
    image?: string; // Optional project image URL
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
    title: {
      type: String,
      required: true,
    },
    bio: {
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
        image: { type: String },
      },
    ],
  },
  { timestamps: true } // Automatically add createdAt and updatedAt
);

// Create the Portfolio model
const Portfolio =
  mongoose.models.Portfolio || mongoose.model<IPortfolio>("Portfolio", PortfolioSchema);

export default Portfolio;
