// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
    type: Boolean,
    default: false
  }
  },
  {
    timestamps: true, // ✅ This automatically adds `createdAt` and `updatedAt`
  }
);

export default mongoose.model("User", userSchema);
