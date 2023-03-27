import { AxiosRequestConfig } from 'axios';
import { instance } from './index';

export interface GetCharacterParams {
  params: {
    id: number
  },
  config?: AxiosRequestConfig
}


export const getCharacter = async ({ config, params }: GetCharacterParams) => {
  return await instance.get<Character>(`character/${params.id}`, { ...config });
};


export interface GetCharactersParams {
  params: CharacterFilter,
  config: AxiosRequestConfig
}

export const getCharacters = async ({ params, config }: GetCharactersParams = {} as GetCharactersParams) => {
  return await instance.get<Result<Character>>('character', { ...config, params });
};

