import { getCharacter } from '@/src/service/character';

interface HeadParams {
  params: {
    id: string
  };
}

const Head = async ({ params }: HeadParams) => {
  const characterResponse = await getCharacter({
    config: {},
    params: {
      id: Number(params.id)
    }
  });

  return (
    <title>{characterResponse.data.name}</title>
  );
};


export default Head;