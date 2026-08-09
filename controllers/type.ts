import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const create = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const type = await prisma.type.create({ data: { name: name } });

    res.status(201).json(type);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create type", error });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const types = await prisma.type.findMany();

    res.status(200).json(types);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get all types", error });
  }
};
