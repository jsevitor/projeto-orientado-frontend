import express from "express";
import {
  getUsers,
  addUsers,
  updateUsers,
  deleteUsers,
} from "../controllers/user.js";

const router = express.Router();

router.get("/usuarios", getUsers);
router.post("/usuarios", addUsers);
router.put("/usuarios/:id", updateUsers);
router.delete("/usuarios/:id", deleteUsers);

export default router;
