import mongoose from "mongoose";

const connectDb = (handler) => async (req, res) => {
  if (mongoose.connection.readyState === 0) {
    // Connect to the MongoDB database if not connected
    try {
      await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
      console.error("Error connecting to the database:", error);
      return res.status(500).json({ error: "Database connection error" });
    }
  }

  // Continue with the request handler
  return handler(req, res);
};

export default connectDb;
