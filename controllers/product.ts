import { NextFunction, Request, Response } from "express";
import { v4 as uuid } from "uuid";
import path from "path";
import { prisma } from "../lib/prisma";
import { ApiError } from "../error/apiError";

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, price, typeId, brandId, info } = req.body;

    if (!req.files || !req.files.img) {
      return res.status(400).json({ message: "Image is required" });
    }

    const { img } = req.files.img;

    let fileName = uuid() + ".jpg";

    await img.mv(path.resolve(__dirname, "..", "static", fileName));

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
  } catch (error) {
    next(ApiError.badRequest());
  }
};

export const getAll = async (req: Request, res: Response) => {
  const { brandId, typeId } = req.query;

  let products;

  if (!brandId && !typeId) {
    products = await prisma.product.findMany();
  }
  if (brandId && !typeId) {
    products = await prisma.product.findMany({
      where: {
        brandId: Number(brandId),
      },
    });
  }
  if (!brandId && typeId) {
    products = await prisma.product.findMany({
      where: {
        typeId: Number(typeId),
      },
    });
  }
  if (brandId && typeId) {
    products = await prisma.product.findMany({
      where: { brandId: Number(brandId), typeId: Number(typeId) },
    });
  }

  res.status(200).json(products);
};

export const getOne = async (req: Request, res: Response) => {
  res.json({ message: "Get one product route" });
};
