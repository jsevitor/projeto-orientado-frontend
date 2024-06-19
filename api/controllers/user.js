import db from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios;";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

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

export const deleteUsers = (req, res) => {
  const q = "DELETE FROM usuarios WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso!");
  });
};
