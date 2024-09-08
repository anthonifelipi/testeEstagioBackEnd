import { Request, Response } from "express";
import listTasksService from "../../services/tasks/listTasks.service";
import { IUserResponse } from "../../interfaces/users";

const listTasksController = async (req: Request, res: Response) => {
  try {
    const user: IUserResponse | undefined = req.user;
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const listTasks = await listTasksService(user);
    return res.status(200).json(listTasks);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};
export default listTasksController;
