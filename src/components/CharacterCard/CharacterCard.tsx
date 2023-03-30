import React, { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { Typography } from '@/src/components';
import styles from './CharacterContainer.module.scss';
import { CharacterStatus } from '@components/CharacterStatus/CharacterStatus';

export interface CharacterCardProps {
  character: Character,

}

export const CharacterCard: FC<CharacterCardProps> = ({ character }) => {

  return (
    <div className={styles.container}>
      <Image src={character.image} alt={character.name + 'picture'} width={220} height={220} />
      <div className={styles.info_container}>
        <Typography tag={'h2'} variant={'title-2'}>{character.name}</Typography>

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

