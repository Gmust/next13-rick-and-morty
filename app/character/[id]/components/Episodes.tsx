'use client';
import React, { FC, useEffect, useState } from 'react';
import { getAllEpisodes } from '@/src/service/episode';
import styles from '../skeleton.module.scss';

interface Episodes {
  episodes: Character['episode'];
}

export const Episodes: FC<Episodes> = ({ episodes }) => {

  const [episodesResult, setEpisodesResult] = useState<Episode[]>([]);

  useEffect(() => {
    const getEpisodes = async () => {
      const episodesResponse = await getAllEpisodes({
        config: {},
        params: {
          multiple: episodes.map(episodeLink =>
            episodeLink.replace('https://rickandmortyapi.com/api/episode/', '')).join(',')
        }
      });
      return setEpisodesResult(episodesResponse.data.results);
    };
    getEpisodes();
  }, [episodes]);


  if (episodesResult.length < 1) {
    return (
      <>
        <div className={styles.skeletonEpisodes}></div>
        <div className={styles.skeletonEpisodes}></div>
        <div className={styles.skeletonEpisodes}></div>
        <div className={styles.skeletonEpisodes}></div>
        <div className={styles.skeletonEpisodes}></div>
        <div className={styles.skeletonEpisodes}></div>
        <div className={styles.skeletonEpisodes}></div>
        <div className={styles.skeletonEpisodes}></div>
        <div className={styles.skeletonEpisodes}></div>
        <div className={styles.skeletonEpisodes}></div>
      </>
    )
  }

  return (
    <div>
      {episodesResult.map(episode => (
        <li key={episode.url}>{episode.name}</li>
      ))}
    </div>
  );
};

