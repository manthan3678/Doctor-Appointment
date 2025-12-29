import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is Required"] },
    password: { type: String, required: [true, "Pasword is Required"] },
    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true,
    },
    image: { type: String },
    phone: { type: String },
    address: { type: String },
    dob: { type: String },
    gender: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);
export default userModel;
