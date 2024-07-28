import { Schema, Document } from "mongoose";

export interface Config {
  googleClientID: string;
  googleClientSecret: string;
  mongoURI: string;
  cookieKey: string;
  redisUrl: string;
  accessKeyId: string;
  secretAccessKey: string;
}

export interface User extends Document {
  _id: Schema.Types.ObjectId;
  googleId: string;
  displayName: string;
}

export interface Blog {
  title: string;
  content: string;
  created: Date;
  _user: Schema.Types.ObjectId;
}

export interface RequestWithUserInfo extends Request {
  user?: User;
}
