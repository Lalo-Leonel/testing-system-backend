import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL || "";

export const connectDB = async () => {
    try {
    mongoose.Promise = Promise;
    mongoose.connect(MONGO_URL);
  } catch (error) {
    console.log(MONGO_URL);
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

mongoose.connection.on("error", (error: Error) => {
  console.error("MongoDB connection error:", error);
});
