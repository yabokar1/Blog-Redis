import { Request, Response, Router } from "express";
import requireLogin from "../middlewares/requireLogin";
import cleanCache from "../middlewares/cleanCache";
import { User } from "../types";
import BlogModel from "../models/Blog";

import { Document, Query } from "mongoose";

const router = Router();

router.get("/:id", requireLogin, async (req: Request, res: Response) => {
  const user = req.user as User;
  const blog = await BlogModel.findOne({
    _user: user.id,
    _id: req.params.id,
  });

  res.status(201).send(blog);
});

router.get("/", requireLogin, async (req: Request, res: Response) => {
  console.log();
  const user = req.user as User;
  const blogs = await BlogModel.find({
    _user: user.id,
  }).cache({ key: user.id });

  res.status(201).send(blogs);
});

router.post(
  "/",
  requireLogin,
  cleanCache,
  async (req: Request, res: Response) => {
    const { title, content } = req.body;
    const user = req.user as User;
    const blog = new BlogModel({
      title,
      content,
      _user: user.id,
    });

    try {
      await blog.save();
    } catch (error) {
      res.status(400).send(error);
    }
  }
);

export default router;
