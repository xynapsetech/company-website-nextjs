import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

export const AdminUser =
  mongoose.models.Admin || mongoose.model("Admin", adminSchema);
