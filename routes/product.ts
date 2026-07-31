import express from "express";
import { create, getAll, getOne } from "../controllers/product";

const router = express.Router();

router.post("/", create);
router.get("/", getAll);
router.get("/:id", getOne);

export default router;
