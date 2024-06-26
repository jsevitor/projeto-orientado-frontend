import db from "../db.js";

/**
 * Obtém todos os usuários da tabela 'usuarios'.
 *
 * @param {*} _ - Requisição não utilizada.
 * @param {*} res - Objeto de resposta para enviar dados ou erros.
 * @returns {Object} - Retorna um array de objetos JSON contendo todos os usuários ou um objeto de erro.
 */
export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios;";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

/**
 * Adiciona um novo usuário à tabela 'usuarios'.
 *
 * @param {*} req - Objeto de requisição contendo os dados do novo usuário no corpo.
 * @param {*} res - Objeto de resposta para enviar uma mensagem de sucesso ou erro.
 * @returns {Object} - Retorna uma mensagem de sucesso ou um objeto de erro em caso de falha na inserção.
 */
export const addUsers = (req, res) => {
  const q =
    "INSERT INTO usuarios (nome, cpf, telefone, celular, email, data_nascimento, usuario, senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

  const values = [
    req.body.nome,
    req.body.cpf,
    req.body.telefone,
    req.body.celular,
    req.body.email,
    req.body.data_nascimento,
    req.body.usuario,
    req.body.senha,
  ];

  db.query(q, values, (err) => {
    if (err) {
      console.error("Erro ao inserir usuário:", err);
      return res.status(500).json({ error: "Erro ao criar usuário" });
    }

    return res.status(200).json("Usuário criado com sucesso!");
  });
};

/**
 * Atualiza um usuário existente na tabela 'usuarios'.
 *
 * @param {*} req - Objeto de requisição contendo os dados atualizados do usuário no corpo e o ID do usuário nos parâmetros da URL.
 * @param {*} res - Objeto de resposta para enviar uma mensagem de sucesso ou erro.
 * @returns {Object} - Retorna uma mensagem de sucesso ou um objeto de erro em caso de falha na atualização.
 */
export const updateUsers = (req, res) => {
  const q =
    "UPDATE usuarios SET `nome` = ?, `cpf` = ?, `telefone` = ?, `celular` = ?, `email` = ?, `data_nascimento` = ?, `usuario` = ?, `senha` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.cpf,
    req.body.telefone,
    req.body.celular,
    req.body.email,
    req.body.data_nascimento,
    req.body.usuario,
    req.body.senha,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso!");
  });
};

/**
 * Deleta um usuário da tabela 'usuarios' com base no ID fornecido.
 *
 * @param {*} req - Objeto de requisição contendo o ID do usuário nos parâmetros da URL.
 * @param {*} res - Objeto de resposta para enviar uma mensagem de sucesso ou erro.
 * @returns {Object} - Retorna uma mensagem de sucesso ou um objeto de erro em caso de falha na exclusão.
 */
export const deleteUsers = (req, res) => {
  const q = "DELETE FROM usuarios WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso!");
  });
};
