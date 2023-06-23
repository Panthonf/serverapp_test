import { Request, Response } from "express";
import { User, getUsers, getUserById } from "../models/User";

export function getAllUsers(req: Request, res: Response): void {
  getUsers((users: User[]) => {
    res.json(users);
  });
}

export function getUser(req: Request, res: Response): void {
  const userId: number = parseInt(req.params.id, 10);
  getUserById(userId, (user: User | undefined) => {
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  });
}
