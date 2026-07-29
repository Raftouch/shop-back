import express from "express";
import { create, getAll } from "../controllers/brand";

const router = express.Router();

router.post("/", create);
router.get("/", getAll);

// router.get("/:id");

export default router;
