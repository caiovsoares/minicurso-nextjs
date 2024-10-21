import prisma from '@/lib/prisma';
import { Noticia } from '@prisma/client';

export async function POST(request: Request) {
  const { titulo, conteudo, descricao, imagem }: Noticia = await request.json();

  const noticia = await prisma.noticia.create({
    data: { conteudo, descricao, titulo, imagem },
  });

  return Response.json(noticia);
}
