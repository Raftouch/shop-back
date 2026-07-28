import express from "express";
import userRoute from "./user";
import productRoute from "./product";
import brandRoute from "./brand";
import typeRoute from "./type";

const router = express.Router();

router.use("/user", userRoute);
router.use("/product", productRoute);
router.use("/brand", brandRoute);
router.use("/type", typeRoute);

export default router;
