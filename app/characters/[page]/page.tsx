import { getCharacters } from '@/src/service/character';

interface CharactersPageProps {
  params: {
    page: string
  };
}

const CharactersPage = async ({ params }: CharactersPageProps) => {

  //const characters = await getCharacters({ params: { page: +params.page }, config: {} });
  return (
    <section>
      <h1>

      </h1>
    </section>
  );
};

export default CharactersPage;