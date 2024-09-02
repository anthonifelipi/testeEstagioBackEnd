import { Request, Response } from "express";
import listTasksService from "../../services/tasks/listTasks.service";

const listTasksController = async (req: Request, res: Response) => {
  try {
    const listTasks = await listTasksService();
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
