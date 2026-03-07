# Atividade Prisma ORM

Projeto desenvolvido para a disciplina **Desenvolvimento Web III**, com o objetivo de praticar a utilização do **Prisma ORM** em conjunto com **Node.js**, **Express** e **PostgreSQL**, realizando operações de CRUD e relacionamentos entre entidades.

---

# 📌 Propósito do Projeto

O objetivo deste projeto é demonstrar:

* Utilização do **Prisma ORM**
* Integração com **PostgreSQL**
* Desenvolvimento de uma **API REST com Node.js e Express**
* Implementação de **CRUD completo**
* Implementação de **relacionamento Many-to-Many**
* Consumo da API através de um **Frontend simples em HTML, CSS e JavaScript**

O sistema permite:

* Cadastro de **Pessoas**
* Cadastro de **Carros**
* Associação entre **Pessoa ↔ Carro**

---

# 🛠 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando:

* **Node.js**
* **Express**
* **Prisma ORM**
* **PostgreSQL**
* **HTML**
* **CSS**
* **JavaScript**

---

# 📂 Estrutura do Projeto

```
ativPrisma1
│
├── prisma
│   └── schema.prisma
│
├── src
│   ├── controllers
│   ├── routes
│   └── server.js
│
├── public
│   ├── pessoas.html
│   ├── carros.html
│   └── associacoes.html
│
├── database
│   └── dados.sql
│
├── package.json
└── README.md
```

---

# ⚙️ Como Rodar o Projeto

## 1️⃣ Clonar o repositório

```
git clone https://github.com/PeClaudino2006/AtividadePrisma.git
```

Entrar na pasta:

```
cd AtividadePrisma
```

---

# 📦 Instalar as dependências

Para instalar todas as dependências do projeto:

```
npm install
```

Caso queira instalar manualmente cada dependência utilizada no projeto:

### Instalar o Express

```
npm install express
```

### Instalar o Prisma ORM

```
npm install prisma --save-dev
```

### Instalar o Prisma Client

```
npm install @prisma/client
```

### Instalar o Dotenv (variáveis de ambiente)

```
npm install dotenv
```

---

# ⚙️ Inicialização do Prisma

Após instalar as dependências, inicialize o Prisma:

```
npx prisma init
```

Este comando irá criar:

```
prisma/
```

e o arquivo:

```
.env
```

---

# 3️⃣ Configurar o banco de dados

Certifique-se de ter o **PostgreSQL instalado e rodando**.

Crie um banco chamado:

```
prisma_db
```

Depois configure o arquivo `.env` na raiz do projeto:

```
DATABASE_URL="postgresql://postgres:SENHA@localhost:5432/prisma_db"
```

Substitua **SENHA** pela senha do seu PostgreSQL.

---

# 🔧 Gerar o Prisma Client

Depois de configurar o `schema.prisma`, execute:

```
npx prisma generate
```

---

# 🗄 Executar as migrações do Prisma

Para criar as tabelas no banco de dados:

```
npx prisma migrate dev --name init
```

Este comando irá:

* Criar as tabelas no banco
* Gerar o Prisma Client

---

# 5️⃣ Inserir dados iniciais (opcional)

Execute o script SQL localizado em:

```
database/dados.sql
```

Ele irá inserir registros de **pessoas, carros e associações** no banco.

---

# 6️⃣ Iniciar o servidor

```
node src/server.js
```

O servidor iniciará em:

```
http://localhost:3000
```

---

# 🌐 Acessar o Frontend

Com o servidor rodando, acesse no navegador:

### Página de carros

```
http://localhost:3000/carros.html
```

### Página de associações

```
http://localhost:3000/associacoes.html
```

---

# 📡 Rotas da API

### Pessoas

```
GET /pessoas
POST /pessoas
GET /pessoas/:id
PUT /pessoas/:id
DELETE /pessoas/:id
```

### Carros

```
GET /carros
POST /carros
GET /carros/:id
PUT /carros/:id
DELETE /carros/:id
```

### Associações

```
GET /associacoes
POST /associacoes
DELETE /associacoes/:id
```

---

# 👨‍💻 Autor

Projeto desenvolvido por **Pedro Nunes**  
Curso Técnico em Informática

---

# 📚 Observação

Este projeto foi desenvolvido com fins **acadêmicos**, para aprendizado de **ORM, APIs REST e banco de dados relacionais utilizando Prisma**.
