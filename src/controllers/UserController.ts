import { Request, Response } from "express";
import { getUsers, getUserById, User } from "../models/User";

export async function getAllUsers(req: Request, res: Response): Promise<void> {
  // const users: User[] = await getUsers();
  res.json({ ddd: "dddd" });
}

export async function getUser(req: Request, res: Response): Promise<void> {
  const id = parseInt(req.params.id, 10);
  const user: User | undefined = await getUserById(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
}
