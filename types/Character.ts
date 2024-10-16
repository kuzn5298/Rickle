import { ResourceBase } from './ResourceBase';

export type CharacterStatus = 'Alive' | 'Dead' | 'unknown';
export type CharacterGender = 'Female' | 'Male' | 'Genderless' | 'unknown';

export type CharacterLocation = {
  name: string;
  dimension: string;
};

export interface Character extends ResourceBase {
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
}

export interface CharacterFilter {
  name?: string;
  type?: string;
  species?: string;
  status?: CharacterStatus;
  gender?: CharacterGender;
  page?: number;
}
