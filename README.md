# CRUD NestJS

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">
  A progressive Node.js framework for building efficient and scalable server-side applications.
</p>

## Description

Exercícios de API backend feita em [NestJS](https://github.com/nestjs/nest) utilizando as melhores [práticas, tecnologias e padrões](#features).

A API possui um controle de usuários e veículos cadastrados aos usuários, um usuário pode ter vários veículos mas um veículo só poder ser vinculado à um único usuário, para acessar a listagem de endpoints basta abrir o Swagger em `HOST:PORT/swagger` após rodar o projeto em sua máquina.

## Required Tools

- [Docker](https://www.docker.com/get-started)
- [Node](https://nodejs.org/pt-br/docs/guides/getting-started-guide)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# prisma studio
$ npm run prisma:studio
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Features

- [x] REST Routes
- [x] CRUD - Create, Read, Update and Delete
- [x] Order and Search By
- [x] Pagination
- [x] Output Patterns
- [x] Docker Compose
- [x] Prisma
- [x] Relation Tables
- [x] Postgres DB
- [x] Fake Data Generator (Populate DB)
- [x] Custom DTOs
- [x] Exception Filters
- [x] Swagger
- [x] Code Formatters
- [x] Clean Code
- [x] Nest Clean Architecture
- [x] Repl
- [x] Auth JWT
- [x] User Roles
- [x] Protected Routes
- [ ] Protected Queries
- [ ] Service Tests
- [ ] SWC Compiler
- [ ] CI/CD
- [ ] Deploy 🚀

## License

Nest is [MIT licensed](LICENSE).
