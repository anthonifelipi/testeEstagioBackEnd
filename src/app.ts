import express, { Request, Response, Router } from "express";
import userRouter from "./routes/users.router";
import { PrismaClient } from "@prisma/client";
import loginRouter from "./routes/login.router";
import tasksRouter from "./routes/tasks.router";

export const app = express();
const port = process.env.PORT || 3000;

export const prisma = new PrismaClient();
app.use(express.json());

app.use("/users", userRouter);
app.use("/login", loginRouter);
app.use("/tasks", tasksRouter);

export default app;
