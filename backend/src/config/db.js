const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI not found. Add it in backend/.env");
  }

  await mongoose.connect(uri);
  console.log("Connected to MongoDB Atlas");
};

module.exports = connectDB;