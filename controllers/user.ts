import { NextFunction, Request, Response } from "express";
import { ApiError } from "../error/apiError";

export const register = async (req: Request, res: Response) => {
  res.json({ message: "Register route" });
};

export const login = async (req: Request, res: Response) => {
  res.json({ message: "Login route" });
};

export const authCheck = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.query;

    if (!id) {
      throw ApiError.badRequest();
    }

    res.json({ message: "Auth route", id });
  } catch (error) {
    next(error);
  }
};
