# Minicurso Next.js :man_teacher:
<img src="https://raw.githubusercontent.com/caiovsoares/minicurso-nextjs/refs/heads/main/public/minicurso.png" alt="Imagem Alunos"/>
Este projeto é fruto de um minicurso realizado no Centro Universitário das Faculdades Associadas de Ensino (FAE). 

Durante a Semana da Engenharia, celebrando os 10 anos do Curso de Engenharia de Software na UniFAE, alguns ex-alunos foram convidados a ministrar minicursos sobre temas de interesse dos estudantes. Um dos assuntos mais solicitados foi o framework Next.js.

Diante disso, decidi desenvolver, em conjunto com os alunos, um projeto simples, porém abrangente, que contemplasse todas as etapas, desde a concepção até o deployment, de uma página de notícias. Essa abordagem permitiu apresentar aos alunos algumas das principais características do Next.js, destacando sua importância, como Server-Side Rendering (SSR), cache e revalidação, otimização de imagens e scripts, além da integração com o Prisma.io.

## Veja como ficou o projeto final :star_struck:
Acesse o link: [Minicurso-Nextjs Vercel](https://minicurso-nextjs.vercel.app/)

## Imagens :camera_flash:
<img src="https://raw.githubusercontent.com/caiovsoares/minicurso-nextjs/refs/heads/main/public/Alunos.jpg" alt="Imagem Alunos"/>
<img src="https://raw.githubusercontent.com/caiovsoares/minicurso-nextjs/refs/heads/main/public/Professores.jpg" alt="Imagem Professores"/>

## Como usar :computer:

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

## Referências :book:
 
- [React](https://react.dev/reference/react) - Documentação do React
- [Next.js](https://nextjs.org/docs) - Documentação do Next.js
- [Prisma ORM](https://www.prisma.io/docs/orm) - Documentação do Prisma ORM
- [Tailwindcss](https://tailwindcss.com/docs/installation) - Documentação do Tailwindcss
