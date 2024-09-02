import { prisma } from "../../app";

const listTasksService = async () => {
  const tasks = await prisma.tasks.findMany({
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
