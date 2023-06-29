import { Request, Response } from "express";
import { getUsers, getUserById } from "../models/User";

export async function getAllUsers(req: Request, res: Response): Promise<void> {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getUser(req: Request, res: Response): Promise<void> {
  try {
    const id = parseInt(req.params.id, 10);
    const user = await getUserById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error retrieving user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
