import express, { Request, Response } from "express";
import { getUsers, getUserById } from "../models/User";
const router = express.Router();

// GET /users
router.get("/", (req: Request, res: Response) => {
  getUsers((users: any) => {
    res.json(users);
  });
});

// GET /users/:id
router.get("/:id", (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.id, 10);
  getUserById(userId, (user: any | undefined) => {
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  });
});

export default router;
