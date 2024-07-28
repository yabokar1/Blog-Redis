import clearHash from "../services/cache";
import { Request, Response, NextFunction } from "express";
import { User } from "../types";
export default async (req: Request, res: Response, next: NextFunction) => {
  await next();
  const user = req.user as User;

  clearHash(user.id);
};
