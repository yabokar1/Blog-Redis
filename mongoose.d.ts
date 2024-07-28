import { Document, Query } from "mongoose";

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
