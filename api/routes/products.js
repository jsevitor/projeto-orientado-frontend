import express from "express";
import {
  getProducts,
  addProducts,
  updateProducts,
  deleteProducts,
} from "../controllers/product.js";

const router = express.Router();

router.get("/produtos", getProducts);
router.post("/produtos", addProducts);
router.put("/produtos/:id", updateProducts);
router.delete("/produtos/:id", deleteProducts);

export default router;
