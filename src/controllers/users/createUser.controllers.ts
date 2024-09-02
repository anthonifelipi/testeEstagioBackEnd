import { Request, Response } from "express";
import createuserService from "../../services/users/createUser.service";

const createusersController = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const newUser = await createuserService(data);
    return res.status(201).json(newUser);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};
export default createusersController;
