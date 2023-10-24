import mongoose from "mongoose";

const { Schema } = mongoose;

// TODO: update model according to https://mongoosejs.com/docs/guide.html

const userSchema = new Schema({
  userName: {
    type: String,
    required: [true, "Provide an username"],
    unique: true,
  },
  email: String,
  password: String,
  isVerified: {
    type: Boolean,
    default: false,
  },
  verifyToken: String,
  verifyTokenExpiration: Date,
  forgotPasswordToken: String,
  forgotPasswordTokenExpiration: Date,
});

export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
