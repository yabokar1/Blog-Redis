import * as passport from "passport";
import { User as MyUser } from "./types";
declare global {
  namespace Express {
    export interface User extends myUser {}
  }
}
