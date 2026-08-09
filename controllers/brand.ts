import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const create = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const brand = await prisma.brand.create({ data: { name: name } });

    res.status(201).json(brand);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create brand", error });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const brands = await prisma.brand.findMany();
    res.status(200).json(brands);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get all brands", error });
  }
};
