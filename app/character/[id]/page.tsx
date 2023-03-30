import Image from 'next/image';
import { getCharacter } from '@/src/service/character';
import styles from './page.module.scss';
import { Typography } from '@/src/components';
import React from 'react';
import { CharacterStatus } from '@components/CharacterStatus/CharacterStatus';
import { getAllEpisodes } from '@/src/service/episode';
import { Episodes } from '@/app/character/[id]/components/Episodes';

interface CharacterPageProps {
  params: {
    id: string
  };
}

const CharacterPage = async ({ params }: CharacterPageProps) => {

  const characterResponse = await getCharacter({
    config: {},
    params: {
      id: Number(params.id)
    }
  });

  const character = characterResponse.data;


  return (
    <div className={styles.container}>
      <div className={styles.photoAndName}>
        <Image src={character.image} alt={character.name} width={250} height={250} className={styles.image} />
        <Typography tag={'h1'} variant={'title-3'}>
          {character.name}
        </Typography>
      </div>

      <div className={styles.restInfo}>
        <ul>
          <li>
            <CharacterStatus status={character.status} species={character.species} />
          </li>
          {
            character.type ??
            <li>
              <span>
                <Typography tag={'p'} variant={'label-2'}>Type:</Typography>
                <Typography tag={'p'} variant={'body-2'}>{character.type}</Typography>
              </span>
            </li>
          }
          <li>
            <span>
              <Typography tag={'p'} variant={'label-2'}>Gender:</Typography>
              <Typography tag={'p'} variant={'body-2'}>{character.gender}</Typography>
            </span>
          </li>
          <li>
            <span>
            <Typography tag={'p'} variant={'label-2'}>Location:</Typography>
              <Typography tag={'p'} variant={'body-2'}>{character.location.name}</Typography>

            </span>
          </li>
          <li>
            <Typography tag={'p'} variant={'label-2'}>Episodes:</Typography>
            <ul>
              <Episodes episodes={character.episode} />
            </ul>
          </li>
        </ul>


      </div>
    </div>
  );
};

export default CharacterPage;