import express from "express";
import { prisma } from "../lib/prisma";
import { register, login, authCheck } from "../controllers/user";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/auth", authCheck);

router.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany();

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
