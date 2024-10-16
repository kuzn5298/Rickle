import { ResourceBase } from './ResourceBase';

export interface Location extends ResourceBase {
  type: string;
  dimension: string;
  residents: string[];
}
