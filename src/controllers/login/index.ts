import { Request, Response } from "express";
import loginService from "../../services/login";

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await loginService({ email, password });

    return res.status(200).json({ user });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export default loginController;
