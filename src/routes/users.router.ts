import { Router } from "express";
import createusersController from "../controllers/users/createUser.controllers";

const userRouter = Router();

userRouter.post("", createusersController);

export default userRouter
