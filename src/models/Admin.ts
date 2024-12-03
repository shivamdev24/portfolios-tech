import mongoose, { Schema, Document, Types, Model } from "mongoose";

// Define the Admin interface
export interface IAdmin extends Document {
  _id: Types.ObjectId;
  email: string;
  username?: string;
  otp?: string;
  otpExpiry?: Date;
  isVerified: boolean;
  role: "admin";
  password: string;
  image_url?: string;
  public_id?: string;
}

// Define the user schema
const AdminSchema: Schema<IAdmin> = new Schema(
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
      enum: ["admin"],
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
const Admin: Model<IAdmin> =
  mongoose.models.Admin || mongoose.model<IAdmin>("Admin", AdminSchema);

export default Admin;
