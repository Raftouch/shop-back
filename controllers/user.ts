import { Request, Response } from "express";

export const authCheck = async (req: Request, res: Response) => {
  res.json({ message: "Auth route" });
};

export const login = async (req: Request, res: Response) => {
  res.json({ message: "Login route" });
};

export const register = async (req: Request, res: Response) => {
  res.json({ message: "Register route" });
};
