import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '@/src/components';
import { CharacterStatus } from '@components/CharacterStatus/CharacterStatus';
import { ROUTES } from '@utils/constants';
import styles from './CharacterContainer.module.scss';

export interface CharacterCardProps {
  character: Character,

}

export const CharacterCard: FC<CharacterCardProps> = ({ character }) => {

  return (
    <div className={styles.container}>
      <Image src={character.image} alt={character.name + 'picture'} width={220} height={220} />
      <div className={styles.info_container}>
        <Typography tag={'h2'} variant={'title-2'} >
          <Link href={`${ROUTES.CHARACTER}/${character.id}`}>{character.name}</Link>
        </Typography>

        <CharacterStatus status={character.status} species={character.species} />

        <div className={styles.locationInfo}>
          <Typography tag='span' variant='label'>Last know location:</Typography>
          <a href='#'>{character.location.name}</a>
        </div>

        <div className={styles.locationInfo}>
          <Typography tag='span' variant='label'>First seen in:</Typography>
          <a href='#'>{character.origin.name}</a>
        </div>

      </div>
    </div>
  )
    ;
};

