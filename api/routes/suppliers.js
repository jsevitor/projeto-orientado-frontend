import express from "express";
import {
  getSuppliers,
  addSuppliers,
  updateSuppliers,
  deleteSuppliers,
} from "../controllers/supplier.js";

const router = express.Router();

/**
 * Rota para obter todos os fornecedores.
 *
 * @route GET /api/fornecedores
 * @group Fornecedores - Operações relacionadas a fornecedores
 */
router.get("/fornecedores", getSuppliers);

/**
 * Rota para adicionar um novo fornecedor.
 *
 * @route POST /api/fornecedores
 * @group Fornecedores - Operações relacionadas a fornecedores
 */
router.post("/fornecedores", addSuppliers);

/**
 * Rota para atualizar um fornecedor existente.
 *
 * @route PUT /api/fornecedores/{id}
 * @group Fornecedores - Operações relacionadas a fornecedores
 */
router.put("/fornecedores/:id", updateSuppliers);

/**
 * Rota para deletar um fornecedor existente.
 *
 * @route DELETE /api/fornecedores/{id}
 * @group Fornecedores - Operações relacionadas a fornecedores
 */
router.delete("/fornecedores/:id", deleteSuppliers);

export default router;
