import mongoose from "mongoose";
import { env } from "../utils/env";

export const connectDB = async () => {
  mongoose.set("strictQuery", false);

  const conn = await mongoose.connect(env.MONGODB_URL);

  console.log(`📡[Mongodb]: DB Connected host: ${conn.connection.host}`);
};
