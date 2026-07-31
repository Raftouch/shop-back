import { Request, Response } from "express";

export const create = async (req: Request, res: Response) => {
  res.json({ message: "Create type route" });
};

export const getAll = async (req: Request, res: Response) => {
  res.json({ message: "Get all types route" });
};
