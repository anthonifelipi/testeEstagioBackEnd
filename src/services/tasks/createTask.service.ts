import { response } from "express";
import { prisma } from "../../app";
import { AppError } from "../../errors/appErrors";
import { ITaskRequest } from "../../interfaces/tasks";

const createTaskService = async (data: ITaskRequest, userId: string) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) {
    throw new AppError("user not found", 400);
  }

  const createTask = await prisma.tasks.create({
    data: {
      title: data.title,
      description: data.description,
      userId: user.id,
    },
    include: {
      user: {
        select: {
          email: true,
          name: true,
        },
      },
    },
  });

  return createTask;
};
export default createTaskService;
