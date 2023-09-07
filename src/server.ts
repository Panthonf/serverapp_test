import express, { Application, Request, Response, NextFunction } from "express";
import userRoutes from "./routes/users";

const app: Application = express();
const port: string | number = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/users", userRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
