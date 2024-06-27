# Sistema de Controle de Estoque

Este projeto é um sistema de gerenciamento de estoque desenvolvido com React no frontend e Node.js no backend.

## Funcionalidades

- Cadastro de Fornecedores
- Cadastro de Produtos
- Cadastro de Usuários
- Entrada de Produtos no Estoque
- Retirada de Produtos do Estoque

## Tecnologias Utilizadas

### Frontend

- React
- React Router Dom
- React Context API
- Axios
- React Toastify
- Vite
- Styled-Components
- Bootstrap Icons

### Backend

- Node.js
- Express
- Cors
- Mysql

## Estrutura de Diretórios

```
frontend/         # Código fonte do frontend React
  |-- public/
  |-- src/
      |-- components/
      |-- contexts/
      |-- pages/
      |-- services/
      |-- styles/
      |-- App.js
      |-- index.js
api/          # Código fonte do backend Node.js
  |-- controllers/
  |-- models/
  |-- routes/
  |-- utils/
  |-- server.js
README.md         # Este arquivo
```

## Instalação

### Requisitos

- Node.js
- npm ou yarn
- Mysql

### Passos

1. **Clonar o repositório:**

   ```
   git clone https://github.com/jsevitor/projeto-orientado-parcial.git
   cd projeto-orientado-parcial
   ```

2. **Instalar dependências do frontend:**

   ```
   cd frontend
   npm install   # ou yarn install
   ```

3. **Instalar dependências do backend:**

   ```
   cd ../api
   npm install   # ou yarn install
   ```

4. **Configuração do banco de dados:**

   - Configure o MongoDB de acordo com as configurações especificadas em `backend/server.js` ou no arquivo de configuração correspondente.

5. **Executar a aplicação:**

   - **Backend:**

     ```
     npm start   # ou yarn start
     ```

   - **Frontend:**

     ```
     cd ../frontend
     npm run dev   # ou yarn run dev
     ```

6. Acesse a aplicação no navegador em `http://localhost:3000`.

## Contribuição

- Para contribuir com melhorias ou correções, siga os passos de instalação e faça um fork deste repositório.
- Crie uma branch, faça as alterações e submeta um pull request descrevendo as alterações realizadas.

## Autores

- Gabriela Queiroz
- José Vitor Oliveira
- Roberto (João)
- Vinícius Nunes
