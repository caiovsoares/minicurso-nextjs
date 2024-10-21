import Link from 'next/link';

export default function Home() {
  const noticias = [
    {
      id: '1',
      titulo: 'Teste',
      descricao: 'Uma descrição teste',
    },
    {
      id: '2',
      titulo: 'Teste2',
      descricao: 'Uma descrição teste2',
    },
  ];

  return (
    <div className='w-full px-4 py-8'>
      <header className='mb-8'>
        <h1 className='text-4xl font-bold text-center mb-4'>
          Últimas Notícias
        </h1>
        <div className='flex justify-center'>
          <Link
            className={`px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors`}
            href='/novanoticia'
          >
            + Nova Notícia
          </Link>
        </div>
      </header>
      <div className='w-full flex flex-col items-center'>
        {noticias.map((noticia) => (
          <div
            key={noticia.id}
            className='max-w-4xl w-full mb-4 bg-white shadow-md rounded-lg'
          >
            <div className='p-4'>
              <h2 className='text-xl font-semibold mb-2'>{noticia.titulo}</h2>
              <p className='text-gray-700 mb-4 line-clamp-2'>
                {noticia.descricao}
              </p>
              <Link
                href={`/noticia/${noticia.id}`}
                className='text-sky-600 hover:text-sky-800'
              >
                Veja mais &gt;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
