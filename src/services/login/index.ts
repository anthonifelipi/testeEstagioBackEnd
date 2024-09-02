import { prisma } from "../../app";
import { AppError } from "../../errors/appErrors";
import { IUserLogin } from "../../interfaces/login";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

const loginService = async ({ email, password }: IUserLogin) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) {
    throw new AppError("Wrong credentials", 403);
  }

  const matchPassword = await compare(password, user.password);
  if (!matchPassword) {
    throw new AppError("Wrong credentials", 403);
  }

  const token = jwt.sign(
    {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        cpf: user.cpf,
      },
    },
    String(process.env.JWT_SECRET),
    { expiresIn: "12h" }
  );
  return token;
};

export default loginService;
