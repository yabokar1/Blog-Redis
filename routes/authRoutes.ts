import { Request, Response } from "express";
import { Router } from "express";
import passport from "passport";

const router = Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get("/google/callback", (req: Request, res: Response) => {
  res.redirect("/blogs");
});

router.get("/logout", (req: Request, res: Response) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).send("Logout failed.");
    }
    res.redirect("/");
  });
});

router.get("/current_user", (req: Request, res: Response) => {
  res.send(req.user);
});

export default router;
