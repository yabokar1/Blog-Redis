import { Document, Query } from "mongoose";
import { User as UserType } from "./types";
import * as passport from "passport";

declare global {
  namespace Express {
    export interface User extends UserType {}
  }
}

declare global {
  namespace Express {
    export interface Request {
      user?: UserType;
    }
  }
}

declare module "mongoose" {
  interface Query<
    ResultType,
    DocType,
    THelpers = {},
    RawDocType = DocType,
    QueryOp = "find",
    TInstanceMethods = Record<string, never>
  > {
    cache(options?: { key?: string }): this;
    useCache?: boolean;
    hashKey?: string;
  }
}
