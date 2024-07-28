// src/types/express/index.d.ts

import { User as UserType } from "./types";

declare global {
  namespace Express {
    export interface Request {
      user?: UserType;
    }
  }
}
