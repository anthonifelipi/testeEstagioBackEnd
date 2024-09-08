import { prisma } from "../../app";
import { AppError } from "../../errors/appErrors";

const deleteTaskService = async (userId: string, taskId: string) => {
  const task = await prisma.tasks.findUnique({
    where: {
      id: taskId,
    },
  });

  if (!task) {
    throw new AppError("Task not found", 404);
  }

  if (task.userId == userId) {
    const deleteTask = await prisma.tasks.delete({
      where: {
        id: task.id,
      },
    });

    return deleteTask;
  } else {
    throw new AppError("You don't have permission to delete this task", 403);
  }
};
export default deleteTaskService;
