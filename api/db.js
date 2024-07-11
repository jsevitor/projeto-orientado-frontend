import mysql from "serverless-mysql";

/**
 * Configuração para conexão com o banco de dados MySQL.
 * @typedef {Object} DBConfig
 * @property {string} host - Endereço do servidor MySQL.
 * @property {string} database - Nome do banco de dados.
 * @property {string} user - Usuário do banco de dados.
 * @property {string} password - Senha do usuário do banco de dados.
 */

/**
 * Configuração para conexão com o banco de dados.
 * @type {DBConfig}
 */
let config = {
  host: "localhost",                // Host do banco de dados MySQL
  database: "projeto_orientado",    // Nome do banco de dados
  user: "root",                     // Usuário do banco de dados
  password: "admin",                // Senha do banco de dados MySQL
};

// Cria uma instância do serverless-mysql com a configuração fornecida
let db = mysql({
  config: config,
});

// Função de exemplo: consulta um usuário fictício no banco de dados
async function consultarUsuario() {
  try {
    const results = await db.query('SELECT * FROM usuarios LIMIT 1');
    return results;
  } catch (error) {
    console.error("Erro ao consultar usuário:", error);
    throw error;
  }
}

// Conecta ao banco de dados MySQL
db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Conectado ao banco de dados.");
});

export default db;

// Exporta a instância do banco de dados e a função para serem utilizadas em outros módulos
// export { db, consultarUsuario };
