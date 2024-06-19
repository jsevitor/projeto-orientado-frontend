import mysql from "serverless-mysql";

let config = {
  host: "localhost",
  database: "projeto_orientado",
  user: "root",
  password: "admin",
};

let db = mysql({
  config: config,
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Conectado ao banco de dados.");
});

export default db;
