import React, { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { Typography } from '@/src/components';
import styles from './CharacterContainer.module.scss';

export interface CharacterCardProps {
  character: Character,

}

export const CharacterCard: FC<CharacterCardProps> = ({ character }) => {


  return (
    <div className={styles.container}>
      <Image src={character.image} alt={character.name + 'picture'} width={220} height={220} />
      <div className={styles.info_container}>
        <Typography tag={'h2'} variant={'title-2'}>{character.name}</Typography>
        <div className={classNames(styles.status_icon, styles[character.status.toLowerCase()])} />
      </div>
    </div>
  );
};

