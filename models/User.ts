import mongoose, { Schema } from "mongoose";
import { User } from "../types";

export const userSchema = new Schema<User>({
  googleId: { type: String, required: true },
  displayName: { type: String, required: true },
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
