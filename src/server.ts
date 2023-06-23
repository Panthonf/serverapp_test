import express from "express";
import { Request, Response } from "express";
import { getAllUsers, getUser } from "./controllers/UserController";
import usersRouter from "./routes/users";
const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

// Use route files as middleware
app.use('/users', usersRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
