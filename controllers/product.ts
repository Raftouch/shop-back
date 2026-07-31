import { Request, Response } from "express";

export const create = async (req: Request, res: Response) => {
  res.json({ message: "Create product route" });
};

export const getAll = async (req: Request, res: Response) => {
  res.json({ message: "Get all products route" });
};

export const getOne = async (req: Request, res: Response) => {
  res.json({ message: "Get one product route" });
};
