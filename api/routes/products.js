import express from "express";
import {
  getProducts,
  addProducts,
  updateProducts,
  deleteProducts,
} from "../controllers/product.js";

const router = express.Router();

/**
 * Rota para obter todos os produtos.
 *
 * @route GET /api/produtos
 * @group Produtos - Operações relacionadas a produtos
 */
router.get("/produtos", getProducts);

/**
 * Rota para adicionar um novo produto.
 *
 * @route POST /api/produtos
 * @group Produtos - Operações relacionadas a produtos
 */
router.post("/produtos", addProducts);

/**
 * Rota para atualizar um produto existente.
 *
 * @route PUT /api/produtos/{id}
 * @group Produtos - Operações relacionadas a produtos
 */
router.put("/produtos/:id", updateProducts);

/**
 * Rota para deletar um produto existente.
 *
 * @route DELETE /api/produtos/{id}
 * @group Produtos - Operações relacionadas a produtos
 */
router.delete("/produtos/:id", deleteProducts);

export default router;
