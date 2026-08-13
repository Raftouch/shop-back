import { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import path from "path";
import { prisma } from "../lib/prisma";

export const create = async (req: Request, res: Response) => {
  const { name, price, typeId, brandId, info } = req.body;
  const { img } = req.files;

  let fileName = uuid() + ".jpg";
  img.mv(path.resolve(__dirname, "..", "static", fileName));

  const product = await prisma.product.create({
    data: {
      name,
      price,
      brandId,
      typeId,
      img: fileName,
    },
  });

  return res.json(product);
};

export const getAll = async (req: Request, res: Response) => {
  res.json({ message: "Get all products route" });
};

export const getOne = async (req: Request, res: Response) => {
  res.json({ message: "Get one product route" });
};
