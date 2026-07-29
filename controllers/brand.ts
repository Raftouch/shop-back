import { Request, Response } from "express";

export const create = async (req: Request, res: Response) => {
  res.json({ message: "Create brand route" });
};

export const getAll = async (req: Request, res: Response) => {
  res.json({ message: "Get all brands route" });
};
