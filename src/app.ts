import express, { Request, Response, Router } from "express";
import userRouter from "./routes/users.router";
import { PrismaClient } from "@prisma/client";
import loginRouter from "./routes/login.router";
import tasksRouter from "./routes/tasks.router";
import cors from "cors";

export const app = express();
app.use(
  cors({
    origin: "*",
    allowedHeaders: ["Authorization", "Content-Type"],
  })
);

export const prisma = new PrismaClient();
app.use(express.json());

app.use("/users", userRouter);
app.use("/login", loginRouter);
app.use("/tasks", tasksRouter);

export default app;
