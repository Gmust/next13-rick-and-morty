import { AxiosRequestConfig } from 'axios';
import { instance } from './index';


interface GetEpisodes {
  params: EpisodeFilter;
  config?: AxiosRequestConfig;
}

export const getAllEpisodes = async ({ params, config }: GetEpisodes) => {
  return await instance.get<Result<Episode>>('episode', { ...config, params });
};


interface GetEpisode {
  params: {
    id: Episode['id']
  };
  config: AxiosRequestConfig;
}

export const getEpisode = async ({ params, config }: GetEpisode) => {
  return await instance.get<Episode>(`episode/${params.id}`, { ...config });
};