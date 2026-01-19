import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "doctor",
    },
    slotdate: { type: String, required: true },
    slottime: { type: String, required: true },
    amount: { type: String, required: true },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "completed", "cancel"],
    },
    payment: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const appointmentModel = mongoose.model("appointment", appointmentSchema);
export default appointmentModel;
