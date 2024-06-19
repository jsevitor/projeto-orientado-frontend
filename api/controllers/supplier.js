import db from "../db.js";

export const getSuppliers = (_, res) => {
  const q = "SELECT * FROM fornecedores;";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

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
