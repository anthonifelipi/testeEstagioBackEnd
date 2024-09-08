<p align="center">
Tasks API, onde você organiza suas tarefas de forma rapida e pratica
</p>

## 🚀 Techs

Neste Projeto usamos as seguintes tecnologias:

- [x] Node.JS
- [x] Express
- [x] TypeScript
- [x] Prisma
- [x] Json web Token
- [x] Dotenv
- [x] BcryptJS
- [x] Cors

### Dependencies

- [x] Node
- [x] @prisma/client
- [x] cors
- [x] sqlite3

### Desenvolvimento

- [x] Nodemon
- [x] TypeScript
- [x] ts-node
- [x] tipos: @types/express, @type/jsonwebtoken - entre outros.

## 🔧 Scripts

- **`start`**: Inicia a versão compilada da aplicação (`dist/app.js`).
- **`build`**: Compila o código TypeScript para JavaScript.
- **`dev`**: Inicia o servidor em modo de desenvolvimento, observando as mudanças no código (`src/server.ts`).

### 📚 Para rodar o projeto em sua máquina

- Necessário : [Node.js](https://nodejs.org/en/download/) e [Yarn](https://yarnpkg.com/) para executar o projeto.

**Clone o projeto deste repositório**

**Crie um arquivo chamado `.env`(no mesmo nivel do arquivo de exemplo `.env.example`). Abaixo vou deixar uma foto de como deve ficar a estrutura do projeto para indicar onde o arquivo `.env` deve ser criado. IMPORTANTE CRIAR O ARQUIVO ANTES DE RODAS OS COMANDOS**

<p align="center">
  <img 
    alt="Imagem de login" 
    src="https://i.imgur.com/KD70Bbl.png"
    width="10%"
  >
</p>

```bash
# Faça um clone do repositorio onde preferir
$ git clone git@github.com:anthonifelipi/testeEstagioBackEnd.git
```

```bash
# Navegue até onde tenha feito o clone do repositorio
$ cd testeEstagioBackEnd
```

**Siga esses passos no terminal**

```bash
# Instale as dependencias.
$ yarn install


# Aqui estamos aplicando as migrações e também e também criando nosso arquivo dev.db.
$ npx prisma migrate dev --name init

# Aqui estamos gerando o cliente do prisma que será utilizado na aplicação.
$ npx prisma generate

# Inicie a aplicação.
$ yarn dev
```

## 📚 Rotas da API

OBS: Exceto as rotas /users e /login não necessita de um token de autenticação.

- **`POST /users`**: Registra um novo usuário.
- **`POST /login`**: Autentica um usuario ja cadastrado e gera um token.
- **`POST /tasks`**: Cadastra uma nova task
- **`GET /tasks`**: Lista todas as Tasks que o usuario cadastrou(Somente as tasks do usuario logado são listadas.)
- **`PATCH /tasks/:task_ID`**: Atualização de uma task ja cadastrada.
- **`DELETE /tasks/:task_ID`**: Exclui uma task baseada no ID fornecido.

## Corpo da requisição

```json

- **`POST /users`**
 {
  "name": "name",
  "email": "johndoe@gmail.com",
  "password": "senhaforte",
  "cpf": "12312312312"
  }

- **`POST /login`**:
{
  "email": "johndoe@gmail.com",
  "password": "senhaforte"
  }

- **`POST /tasks`**:
 {
  "title": "Título da task",
  "description": "Descrição da task",
  }

- **`GET /tasks`**:
{
  "Lista todas as tasks"
  }

- **`PATCH /tasks`**:
 {
  "title": "Título da task(OPCIONAL)",
  "description": "Descrição da task(OPCIONAL)",
  "completed": true //false
  }

- **`DELETE /tasks`**:
{
 " Apenas deleta uma task com o ID fornecido na requisição"
  }
```

## Exemplo de requisição

    Caso opte por usar o Insomnia ou qualquer outro programa para testes somente da API.

1. Após o cadastro, faça o login e será retornado um token para utilizar nas requisições de criação e leitura de tarefas.
2. Vá até a aba **Headers** do insomnia e adicione:
   - Key: `Authorization`
   - Value: `Bearer {token_retornado_no_login}`

`Com esses passos agora é possivel acessar as rotas protegidas da API.`
