import db from "../db.js";

export const getProducts = (_, res) => {
  const q = "SELECT * FROM produtos;";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addProducts = (req, res) => {
  const { nome, marca, categoria, fornecedor_id, picture } = req.body;

  const q =
    "INSERT INTO produtos (`nome`, `marca`, `categoria`, `picture`) VALUES (?, ?, ?, ?, ?)";
  const values = [nome, marca, categoria, fornecedor_id, picture];

  db.query(q, values, (err) => {
    if (err) {
      console.error("Erro ao inserir Produto:", err);
      return res.status(500).json({ error: "Erro ao criar produto" });
    }

    return res.status(200).json("Produto criado com sucesso!");
  });
};

export const updateProducts = (req, res) => {
  const { nome, marca, categoria, fornecedor_id, picture } = req.body;
  const productId = req.params.id;

  const q =
    "UPDATE produtos SET `nome` = ?, `marca` = ?, `categoria` = ?, `picture` = ? WHERE `id` = ?";
  const values = [nome, marca, categoria, fornecedor_id, picture, productId];

  db.query(q, values, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Produto atualizado com sucesso!");
  });
};

export const deleteProducts = (req, res) => {
  const q = "DELETE FROM produtos WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Produto deletado com sucesso!");
  });
};
