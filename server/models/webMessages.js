import mongoose from "mongoose";

const webMessageSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is Required"] },
    contact: {
      type: String,
      required: [true, "Contact No Or Email Is Required"],
    },
    message: { type: String, required: [true, "Message is Required"] },
  },
  { timestamps: true }
);

const webMessage = mongoose.model("webmessage", webMessageSchema);
export default webMessage;
