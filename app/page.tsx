import { CharacterCard, Typography } from '@/src/components';
import { getCharacters } from '@/src/service/character';
import { getRandomCharactersPage } from '@utils/helpers/getRandomCharactersPage';

const Home = async () => {

  const charactersResponse = await getCharacters({ params: { page: getRandomCharactersPage() }, config: {} });
  const characters = charactersResponse.data.results;

  return (
    <section >
      <Typography tag={'h1'} variant={'title-1'}>
        Rick and Morty
      </Typography>
      <div className='flex flex-wrap justify-center'>
        {
          characters.map((character) => (
            <CharacterCard character={character} key={character.id} />
          ))
        }
      </div>
    </section>
  );
};

export default Home;