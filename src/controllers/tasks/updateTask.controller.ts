import { Request, Response } from "express";
import updateTaskService from "../../services/tasks/updateTask.service";

const updateTaskController = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.task_id;
    const data = req.body;
    const taskUpdate = await updateTaskService(data, taskId);

    return res.status(200).json(taskUpdate);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};
export default updateTaskController;
