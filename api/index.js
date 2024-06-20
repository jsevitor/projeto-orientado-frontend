import express from "express";
import userRoutes from "./routes/users.js";
import supplierRoutes from "./routes/suppliers.js";
import productRoutes from "./routes/products.js"; // Importe a rota de produtos
import cors from "cors";
import db from "./db.js"; // Importando a conexão com o banco de dados

const app = express(); // Inicializando o servidor
const port = 3000; // Porta dedicada ao servidor

// middleware
app.use(express.json());
app.use(cors()); // Liberando acesso de qualquer origem

// Use as rotas
app.use("/", userRoutes);
app.use("/", supplierRoutes);
app.use("/", productRoutes); // Use a rota de produtos

app.get("/", (request, response) => {
  return response.send("Servidor funcionando...");
});

// Direcionando a porta ao servidor
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
