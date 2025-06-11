import dotenv from 'dotenv'; 
import connectDB from './db/index.js';
import express from 'express';
dotenv.config();

const app = express();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("✅ Server is running at port:", process.env.PORT || 8000);
    });
  })
  .catch((err) => {
    console.error("❌ Error during database connection:", err.message);
    process.exit(1);
  });