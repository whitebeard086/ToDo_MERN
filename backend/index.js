/* eslint-disable linebreak-style */
import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

const PORT = process.env.PORT || 8000;
const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

app.listen(PORT, () => {
  connectDB();
  console.log(`server is running on port: ${PORT}`);
});
