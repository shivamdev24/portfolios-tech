import mongoose, { Schema, Document } from "mongoose";
import Portfolio from "./PortfolioInfo";

// Define the User interface
export interface IUser extends Document {
  _id: mongoose.Schema.Types.ObjectId;
  email: string;
  username?: string;
  name?: string;
  otp?: string;
  otpExpiry?: Date;
  isVerified: boolean;
  role: "user" | "company" | "admin";
  password: string;
  image_url?: string;
  public_id?: string;
  resetToken?: string;
  resetTokenExpiresAt?: Date;
  preferences?: {
    industry?: string;
    location?: string;
    experienceLevel?: "Fresher" | "Mid-Level" | "Senior";
    jobType?: "Full-Time" | "Part-Time" | "Remote";
    skills?: string[];
  };
  portfolio?: mongoose.Schema.Types.ObjectId | typeof Portfolio;
}

// Define the user schema
const UserSchema: Schema<IUser> = new Schema(
  {
    username: { type: String, unique: true },
    name: { type: String },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (value: string) => /\S+@\S+\.\S+/.test(value),
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    otp: { type: String },
    otpExpiry: { type: Date },
    isVerified: { type: Boolean, default: false },
    role: {
      type: String,
      enum: ["user", "company", "admin"],
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [8, "Password must be at least 8 characters long"],
    },
    resetToken: { type: String, required: false },
    resetTokenExpiresAt: { type: Date, required: false },
    image_url: { type: String },
    public_id: { type: String },
    preferences: {
      industry: { type: String, default: "" },
      location: { type: String, default: "" },
      experienceLevel: {
        type: String,
        enum: ["Fresher", "Mid-Level", "Senior"],
        default: "Fresher",
      },
      jobType: {
        type: String,
        enum: ["Full-Time", "Part-Time", "Remote"],
        default: "Full-Time",
      },
      skills: { type: [String], default: [] },
    },
    portfolio: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Portfolio",
    },
  },
  { timestamps: true }
);

// Create the User model
const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
