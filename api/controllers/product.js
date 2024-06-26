import db from "../db.js";

/**
 * Obtém todos os produtos da tabela 'produtos'.
 *
 * @param {*} _ - Requisição não utilizada.
 * @param {*} res - Objeto de resposta para enviar dados ou erros.
 * @returns {Object} - Retorna um array de objetos JSON contendo todos os produtos ou um objeto de erro.
 */
export const getProducts = (_, res) => {
  const q = "SELECT * FROM produtos;";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

/**
 * Adiciona um novo produto à tabela 'produtos'.
 *
 * @param {*} req - Objeto de requisição contendo os dados do novo produto no corpo.
 * @param {*} res - Objeto de resposta para enviar uma mensagem de sucesso ou erro.
 * @returns {Object} - Retorna uma mensagem de sucesso ou um objeto de erro em caso de falha na inserção.
 */
export const addProducts = (req, res) => {
  const { nome, marca, categoria, fornecedor_id, picture } = req.body;

  const q =
    "INSERT INTO produtos (`nome`, `marca`, `categoria`, `fornecedor_id`, `picture`) VALUES (?, ?, ?, ?, ?)";
  const values = [nome, marca, categoria, fornecedor_id, picture];

  db.query(q, values, (err) => {
    if (err) {
      console.error("Erro ao inserir Produto:", err);
      return res.status(500).json({ error: "Erro ao criar produto" });
    }

    return res.status(200).json("Produto criado com sucesso!");
  });
};

/**
 * Atualiza um produto existente na tabela 'produtos'.
 *
 * @param {*} req - Objeto de requisição contendo os dados atualizados do produto no corpo e o ID do produto nos parâmetros da URL.
 * @param {*} res - Objeto de resposta para enviar uma mensagem de sucesso ou erro.
 * @returns {Object} - Retorna uma mensagem de sucesso ou um objeto de erro em caso de falha na atualização.
 */
export const updateProducts = (req, res) => {
  const { nome, marca, categoria, fornecedor_id, picture } = req.body;
  const productId = req.params.id;

  const q =
    "UPDATE produtos SET `nome` = ?, `marca` = ?, `categoria` = ?, `fornecedor_id` = ?, `picture` = ? WHERE `id` = ?";
  const values = [nome, marca, categoria, fornecedor_id, picture, productId];

  db.query(q, values, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Produto atualizado com sucesso!");
  });
};

/**
 * Deleta um produto da tabela 'produtos' com base no ID fornecido.
 *
 * @param {*} req - Objeto de requisição contendo o ID do produto nos parâmetros da URL.
 * @param {*} res - Objeto de resposta para enviar uma mensagem de sucesso ou erro.
 * @returns {Object} - Retorna uma mensagem de sucesso ou um objeto de erro em caso de falha na exclusão.
 */
export const deleteProducts = (req, res) => {
  const q = "DELETE FROM produtos WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Produto deletado com sucesso!");
  });
};

