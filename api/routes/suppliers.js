import express from "express";
import {
  getSuppliers,
  addSuppliers,
  updateSuppliers,
  deleteSuppliers,
} from "../controllers/supplier.js";

const router = express.Router();

router.get("/fornecedores", getSuppliers);
router.post("/fornecedores", addSuppliers);
router.put("/fornecedores/:id", updateSuppliers);
router.delete("/fornecedores/:id", deleteSuppliers);

export default router;
