import { prisma } from "../../app";
import { AppError } from "../../errors/appErrors";
import { IUserRequest, IUserResponse } from "../../interfaces/users";
import * as bcrypt from "bcryptjs";

const createuserService = async (
  data: IUserRequest
): Promise<IUserResponse> => {
  console.log(data);

  const emailAlreadyExists = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (emailAlreadyExists) {
    throw new AppError("Email already exists", 400);
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);
  console.log("cheguei aqui");
  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      cpf: data.cpf,
      password: hashedPassword,
    },
  });
  const { password, ...response } = user;

  return response;
};
export default createuserService;
