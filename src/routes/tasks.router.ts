import { Router } from "express";
import createTaskController from "../controllers/tasks/createTask.controller";
import verifyAuthToken from "../middlewares/verifyAuthToken";
import listTasksController from "../controllers/tasks/listTasks.controller";
import updateTaskController from "../controllers/tasks/updateTask.controller";
import deleteTaskController from "../controllers/tasks/deleteTask.controller";

const tasksRouter = Router();

tasksRouter.post("", verifyAuthToken, createTaskController);
tasksRouter.get("", verifyAuthToken, listTasksController);
tasksRouter.patch("/:task_id", verifyAuthToken, updateTaskController);
tasksRouter.delete("/:task_id", verifyAuthToken, deleteTaskController);

export default tasksRouter;
