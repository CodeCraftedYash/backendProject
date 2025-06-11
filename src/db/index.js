import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const clientOptions = {
  serverApi: {
    version: '1',
    strict: true,
    deprecationErrors: true
  }
};

export default async function connectDB() {
  try {
    const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}/?retryWrites=true&w=majority&appName=db`, clientOptions);
    console.log(`✅ MongoDB connected successfully to: ${connection.connection.host}:${connection.connection.port}/${DB_NAME}`);
  } catch (error) {
    console.error('❌ Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
}
