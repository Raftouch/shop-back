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
  const { id } = req.query;

  if (!id) {
    return next(ApiError.badRequest());
  }

  res.json({ message: "Auth route", id });
};
