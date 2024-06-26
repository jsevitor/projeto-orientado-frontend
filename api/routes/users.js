import express from "express";
import {
  getUsers,
  addUsers,
  updateUsers,
  deleteUsers,
} from "../controllers/user.js";

const router = express.Router();

/**
 * Rota para obter todos os usuários.
 *
 * @route GET /api/usuarios
 * @group Usuários - Operações relacionadas a usuários
 */
router.get("/usuarios", getUsers);

/**
 * Rota para adicionar um novo usuário.
 *
 * @route POST /api/usuarios
 * @group Usuários - Operações relacionadas a usuários
 */
router.post("/usuarios", addUsers);

/**
 * Rota para atualizar um usuário existente.
 *
 * @route PUT /api/usuarios/{id}
 * @group Usuários - Operações relacionadas a usuários
 */
router.put("/usuarios/:id", updateUsers);

/**
 * Rota para deletar um usuário existente.
 *
 * @route DELETE /api/usuarios/{id}
 * @group Usuários - Operações relacionadas a usuários
 */
router.delete("/usuarios/:id", deleteUsers);

export default router;
