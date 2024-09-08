import { prisma } from "../../app";
import { IUserRequest, IUserResponse } from "../../interfaces/users";

const listTasksService = async (user: IUserResponse) => {
  const tasks = await prisma.tasks.findMany({
    where: {
      userId: user.id,
    },
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
  });

  return tasks;
};
export default listTasksService;
