import db from "../db.js";

/**
 * Obtém todos os fornecedores da tabela 'fornecedores'.
 *
 * @param {*} _ - Requisição não utilizada.
 * @param {*} res - Objeto de resposta para enviar dados ou erros.
 * @returns {Object} - Retorna um array de objetos JSON contendo todos os fornecedores ou um objeto de erro.
 */
export const getSuppliers = (_, res) => {
  const q = "SELECT * FROM fornecedores;";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

/**
 * Adiciona um novo fornecedor à tabela 'fornecedores'.
 *
 * @param {*} req - Objeto de requisição contendo os dados do novo fornecedor no corpo.
 * @param {*} res - Objeto de resposta para enviar uma mensagem de sucesso ou erro.
 * @returns {Object} - Retorna uma mensagem de sucesso ou um objeto de erro em caso de falha na inserção.
 */
export const addSuppliers = (req, res) => {
  const q =
    "INSERT INTO fornecedores(`nome`, `cnpj`, `telefone`, `celular`, `email`, `site`, `cep`, `endereco`, `numero_endereco`, `bairro`, `cidade`, `estado`, `banco`, `tipo_conta`, `conta`, `agencia_bancaria`, `pix`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.cnpj,
    req.body.telefone,
    req.body.celular,
    req.body.email,
    req.body.site,
    req.body.cep,
    req.body.endereco,
    req.body.numero_endereco,
    req.body.bairro,
    req.body.cidade,
    req.body.estado,
    req.body.banco,
    req.body.tipo_conta,
    req.body.conta,
    req.body.agencia_bancaria,
    req.body.pix,
  ];

  db.query(q, [values], (err) => {
    if (err)
      return res
        .status(500)
        .json({ error: "Erro ao criar fornecedor", details: err });

    return res.status(200).json("Fornecedor criado com sucesso!");
  });
};

/**
 * Atualiza um fornecedor existente na tabela 'fornecedores'.
 *
 * @param {*} req - Objeto de requisição contendo os dados atualizados do fornecedor no corpo e o ID do fornecedor nos parâmetros da URL.
 * @param {*} res - Objeto de resposta para enviar uma mensagem de sucesso ou erro.
 * @returns {Object} - Retorna uma mensagem de sucesso ou um objeto de erro em caso de falha na atualização.
 */
export const updateSuppliers = (req, res) => {
  const q =
    "UPDATE fornecedores SET `nome` = ?, `cnpj` = ?, `telefone` = ?, `celular` = ?, `email` = ?, `site` = ?, `cep` = ?, `endereco` = ?, `numero_endereco` = ?, `bairro` = ?, `cidade` = ?, `estado` = ?, `banco` = ?, `tipo_conta` = ?, `conta` = ?, `agencia_bancaria` = ?, `pix` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.cnpj,
    req.body.telefone,
    req.body.celular,
    req.body.email,
    req.body.site,
    req.body.cep,
    req.body.endereco,
    req.body.numero_endereco,
    req.body.bairro,
    req.body.cidade,
    req.body.estado,
    req.body.banco,
    req.body.tipo_conta,
    req.body.conta,
    req.body.agencia_bancaria,
    req.body.pix,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err)
      return res
        .status(500)
        .json({ error: "Erro ao atualizar fornecedor", details: err });

    return res.status(200).json("Fornecedor atualizado com sucesso!");
  });
};

/**
 * Deleta um fornecedor da tabela 'fornecedores' com base no ID fornecido.
 *
 * @param {*} req - Objeto de requisição contendo o ID do fornecedor nos parâmetros da URL.
 * @param {*} res - Objeto de resposta para enviar uma mensagem de sucesso ou erro.
 * @returns {Object} - Retorna uma mensagem de sucesso ou um objeto de erro em caso de falha na exclusão.
 */
export const deleteSuppliers = (req, res) => {
  const q = "DELETE FROM fornecedores WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err)
      return res
        .status(500)
        .json({ error: "Erro ao deletar fornecedor", details: err });

    return res.status(200).json("Fornecedor deletado com sucesso!");
  });
};

