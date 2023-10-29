import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
  } catch (error) {
    return false;
  }
  console.log("Connected to MongoDB");
};

export default connectMongoDB;