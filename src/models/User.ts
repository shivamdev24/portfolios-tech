// import mongoose, { Schema, Document } from "mongoose";
// import Portfolio from "./PortfolioInfo";

// // Define the User interface
// export interface IUser extends Document {
//   _id: mongoose.Schema.Types.ObjectId;
//   email: string;
//   username?: string;
//   name?: string;
//   otp?: string;
//   otpExpiry?: Date;
//   isVerified: boolean;
//   role: "user" | "company" | "admin";
//   password: string;
//   image_url?: string;
//   public_id?: string;
//   resetToken?: string;
//   resetTokenExpiresAt?: Date;
//   preferences?: {
//     industry?: string;
//     location?: string;
//     experienceLevel?: "Fresher" | "Mid-Level" | "Senior";
//     jobType?: "Full-Time" | "Part-Time" | "Remote";
//     skills?: string[];
//   };
//   portfolio?: mongoose.Schema.Types.ObjectId | typeof Portfolio;
// }

// // Define the user schema
// const UserSchema: Schema<IUser> = new Schema(
//   {
//     username: { type: String, unique: true },
//     name: { type: String },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       validate: {
//         validator: (value: string) => /\S+@\S+\.\S+/.test(value),
//         message: (props) => `${props.value} is not a valid email!`,
//       },
//     },
//     otp: { type: String },
//     otpExpiry: { type: Date },
//     isVerified: { type: Boolean, default: false },
//     role: {
//       type: String,
//       enum: ["user", "company", "admin"],
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//       minlength: [8, "Password must be at least 8 characters long"],
//     },
//     resetToken: { type: String, required: false },
//     resetTokenExpiresAt: { type: Date, required: false },
//     image_url: { type: String },
//     public_id: { type: String },
//     preferences: {
//       industry: { type: String, default: "" },
//       location: { type: String, default: "" },
//       experienceLevel: {
//         type: String,
//         enum: ["Fresher", "Mid-Level", "Senior"],
//         default: "Fresher",
//       },
//       jobType: {
//         type: String,
//         enum: ["Full-Time", "Part-Time", "Remote"],
//         default: "Full-Time",
//       },
//       skills: { type: [String], default: [] },
//     },
//     portfolio: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Portfolio",
//     },
//   },
//   { timestamps: true }
// );

// // Create the User model
// const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

// export default User;





import mongoose, { Schema, Document } from "mongoose";
import Portfolio from "./PortfolioInfo";

// Define the User interface
export interface IUser extends Document {
  _id: mongoose.Schema.Types.ObjectId;
  email: string;
  username?: string;
  name?: string;
  phoneNumber?: string;
  yearexperience?: string;
  address?: string;
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
  portfolioLink?: string;
  education?: {
    degree: string;
    institution: string;
    year: number;
  }[];
  experience?: {
    title: string;
    company: string;
    startDate: Date;
    endDate: Date;
    description: string;
  }[];
  socialLinks?: {
    linkedin?: string;
    github?: string;
    portfolio?: string;
  };
  availabilityStatus?:
    | "Actively Looking"
    | "Open to Opportunities"
    | "Not Looking";
  companyDetails?: {
    companyName?: string;
    website?: string;
    address?: string;
    contactNumber?: string;
  };
  companySize?: "Small" | "Medium" | "Large";
  industries?: string[];
  jobPostings?: mongoose.Schema.Types.ObjectId[];
  isVerifiedCompany?: boolean;
  logoUrl?: string;
  description?: string;
}

// Define the User schema
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
    phoneNumber: { type: String },
    address: { type: String },
    portfolioLink: { type: String, default: "" },
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
    resetToken: { type: String },
    resetTokenExpiresAt: { type: Date },
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
      ref: Portfolio,
    },
    education: [
      {
        degree: { type: String },
        institution: { type: String },
        year: { type: Number },
      },
    ],
    yearexperience: { type: String },
    experience: [
      {
        title: { type: String },
        company: { type: String },
        startDate: { type: Date },
        endDate: { type: Date },
        description: { type: String },
      },
    ],
    socialLinks: {
      linkedin: { type: String },
      github: { type: String },
      portfolio: { type: String },
    },
    availabilityStatus: {
      type: String,
      enum: ["Actively Looking", "Open to Opportunities", "Not Looking"],
      default: "Open to Opportunities",
    },
    companyDetails: {
      companyName: { type: String },
      website: { type: String },
      address: { type: String },
      contactNumber: { type: String },
    },
    companySize: {
      type: String,
      enum: ["Small", "Medium", "Large"],
    },
    industries: { type: [String], default: [] },
    jobPostings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
    isVerifiedCompany: { type: Boolean, default: false },
    logoUrl: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

// Create the User model
const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
