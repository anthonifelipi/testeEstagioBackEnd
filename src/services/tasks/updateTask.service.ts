import { prisma } from "../../app";
import { AppError } from "../../errors/appErrors";
import { ITaskResponse } from "../../interfaces/tasks";

const updateTaskService = async (data: ITaskResponse, taskId: string) => {
  console.log(taskId);
  const task = await prisma.tasks.findUnique({
    where: {
      id: taskId,
    },
  });

  if (task == null) {
    throw new AppError("Task not found", 404);
  }

  const updatedTask = await prisma.tasks.update({
    where: {
      id: task.id,
    },
    data,
  });

  return updatedTask;
};
export default updateTaskService;
