import mongoose, { Schema } from "mongoose";
import { Blog } from "../types";

const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  created: { type: Date, default: Date.now },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
});

const BlogModel = mongoose.model("Blog", blogSchema);

export default BlogModel;
