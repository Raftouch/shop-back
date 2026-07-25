import express from "express";
import dotenv from "dotenv";
import { prisma } from "../lib/prisma";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", async (req, res) => {
  try {
    // const user = await prisma.user.create({
    //   data: {
    //     email: "bob@marley.com",
    //     password: "test",
    //   },
    // });

    const users = await prisma.user.findMany();

    // console.log("All users:", JSON.stringify(users));

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}`));
