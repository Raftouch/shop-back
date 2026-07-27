import express from "express";
import dotenv from "dotenv";
import { prisma } from "../lib/prisma";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany();

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}`));
