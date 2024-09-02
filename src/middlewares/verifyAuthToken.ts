import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const verifyAuthToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
  interface CustomRequest extends Request {
    user?: {
      email: string;
      id: string;
      name: string;
      cpf: string;
    };
  }

  const splitToken = token.split(" ");
  jwt.verify(
    splitToken[1],
    process.env.JWT_SECRET as string,
    (error: any, decoded: any) => {
      if (error) {
        return res.status(401).json({
          message: "Invalid token",
        });
      }

      req.user = {
        id: decoded.user.id,
        name: decoded.user.name,
        email: decoded.user.email,
        cpf: decoded.user.cpf,
      };
      next();
    }
  );
};

export default verifyAuthToken;
