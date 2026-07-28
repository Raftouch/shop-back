import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "../routes/user";
import productRoute from "../routes/product";
import brandRoute from "../routes/brand";
import typeRoute from "../routes/type";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/brand", brandRoute);
app.use("/type", typeRoute);

app.get("/", async (req, res) => {
  try {
    res.json({ message: "Welcome to the Shop API" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}`));
