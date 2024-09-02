import { Request, Response } from "express";
import deleteTaskService from "../../services/tasks/deleteTask.service";

const deleteTaskController = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(400).json({ message: "User not authenticated." });
    }
    const userId: string = req.user.id;
    const taskId: string = req.params.task_id;

    const taskDeleted = await deleteTaskService(userId, taskId);

    return res.status(200).json("Task deleted with success");
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};
export default deleteTaskController;
