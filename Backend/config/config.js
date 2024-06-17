import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connection to Mongoose started ${conn.connection.host}`);
  } catch (error) {
    console.log("Connection to Mongoose failed");
  }
};

export default connectDB;
