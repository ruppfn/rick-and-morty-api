import BaseResource from './baseResource';

export default interface Episode extends BaseResource {
  air_date: string;
  episode: string;
  characters: Array<string>;
}
