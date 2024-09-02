import { Request, Response } from "express";
import createTaskService from "../../services/tasks/createTask.service";

const createTaskController = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(400).json({ message: "User not authenticated." });
    }
    const userId: any = req.user.id;
    const data = req.body;

    const createTask = await createTaskService(data, userId);

    return res.status(201).json(createTask);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};
export default createTaskController;
