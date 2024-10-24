# Minicurso Next.js
Este projeto é fruto de um minicurso realizado no Centro Universitário das Faculdades Associadas de Ensino (FAE). 

Durante a Semana da Engenharia, celebrando os 10 anos do Curso de Engenharia de Software na UniFAE, alguns ex-alunos foram convidados a ministrar minicursos sobre temas de interesse dos estudantes. Um dos assuntos mais solicitados foi o framework Next.js.

Diante disso, decidi desenvolver, em conjunto com os alunos, um projeto simples, porém abrangente, que contemplasse todas as etapas, desde a concepção até o deployment, de uma página de notícias. Essa abordagem permitiu apresentar aos alunos algumas das principais características do Next.js, destacando sua importância, como Server-Side Rendering (SSR), cache e revalidação, otimização de imagens e scripts, além da integração com o Prisma.io.

## Imagens
<img src="https://raw.githubusercontent.com/caiovsoares/minicurso-nextjs/24f94faf5b56930156308f28733d36c37ee932a0/public/Alunos.jpg" alt="Imagem Alunos" width="800"/>
<img src="https://raw.githubusercontent.com/caiovsoares/minicurso-nextjs/24f94faf5b56930156308f28733d36c37ee932a0/public/Professores.jpg" alt="Imagem Professores" width="800"/>

## Como usar

- Primeiro providêncie um banco de dados Postgresql, ou configure o prisma para utilizar outro banco e configure as variáveis de ambiente no arquivo .env seguindo o exemplo do arquivo .env.example
```bash
DATABASE_URL=
DIRECT_URL=
```
- Instale as dependências
```bash
npm i
```
- Em seguida gere os modelos e o banco de dados rodando o seguinte comando na raiz do projeto
```bash
npx prisma generate
npx prisma db push
```
- Por fim inicie o projeto como desenvolvedor
```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu browser para ver o resultado.

## Referências

- [React](https://react.dev/reference/react) - Documentação do React
- [Next.js](https://nextjs.org/docs) - Documentação do Next.js
- [Prisma ORM](https://www.prisma.io/docs/orm) - Documentação do Prisma ORM
- [Tailwindcss](https://tailwindcss.com/docs/installation) - Documentação do Tailwindcss
