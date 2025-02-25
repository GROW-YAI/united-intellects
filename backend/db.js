// db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI;
    console.log("MONGO_URI:", MONGO_URI); // Debugging line
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("🟢 Connected to MongoDB");
  } catch (error) {
    console.error("🔴 MongoDB connection error:", error);
    process.exit(1); // Exit the process if the connection fails
  }
};

module.exports = connectDB;