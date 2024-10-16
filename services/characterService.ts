import { ApiResponse, client } from '@/libs/client';
import { objectToQueryString } from '@/libs/utils';
import { Character, CharacterFilter, ResourceInfo } from '@/types';

const ENDPOINT = 'character';

export const getCharacters = async (
  filters: CharacterFilter = {}
): Promise<ApiResponse<ResourceInfo<Character[]> | null>> => {
  const query = objectToQueryString(filters);
  return client.get(`${ENDPOINT}${query}`);
};
