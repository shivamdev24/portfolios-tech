import mongoose, { Schema, Document, Types, Model } from "mongoose";

// Define the User interface
export interface ICompany extends Document {
  _id: Types.ObjectId;
  email: string;
  username?: string;
  otp?: string;
  otpExpiry?: Date;
  isVerified: boolean;
  role: "company";
  password: string;
  image_url?: string;
  public_id?: string;
}

// Define the user schema
const CompanySchema: Schema<ICompany> = new Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    otp: {
      type: String,
    },
    otpExpiry: {
      type: Date,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["company"],
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
    },
    public_id: {
      type: String,
    },
  },
  { timestamps: true }
);

// Create the User model
const Company: Model<ICompany> =
  mongoose.models.Company || mongoose.model<ICompany>("Company", CompanySchema);

export default Company;
