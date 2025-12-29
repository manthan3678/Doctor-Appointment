import mongoose from "mongoose";
const connectDB = async () => {
  //   mongoose.connection.on("connected", () => {
  //     console.log("Mongoose DB Connected");
  //   });
  //   await mongoose.connect(`${process.env.MONGO_URL_LOCAL}`);
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(process.env.MONGO_URL);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};
export default connectDB;
