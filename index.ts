import express from "express";
import mongoose from "mongoose";
import cookieSession from "cookie-session";
import bodyParser from "body-parser";
import keys from "./config/keys";
import UserModel from "./models/User";
import BlogModel from "./models/Blog";
import passport from "./services/passport";
import authRouter from "./routes/authRoutes";
import blogRouter from "./routes/blogRoutes";

export const connectToDatabase = async (): Promise<void> => {
  try {
    console.log(keys.mongoURI);
    await mongoose.connect(keys.mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

connectToDatabase();

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);
app.use("/blogs", blogRouter);

if (["production"].includes(process.env.NODE_ENV!)) {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve("client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
