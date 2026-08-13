import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fileUpload from "express-fileupload";
import router from "../routes/index";
import { errorHandler } from "../middleware/errorHandling";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(fileUpload({}));

app.use("/api", router);

app.use(errorHandler);

app.get("/", async (req, res) => {
  try {
    res.json({ message: "Welcome to the Shop API" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}`));
