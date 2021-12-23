import BaseResource from './baseResource';

export default interface Character extends BaseResource {
  status:string;
  species: string;
  type: string;
  gender: string;
  origin: SubResource;
  location: SubResource;
  image: string;
  episode: Array<string>;
}

interface SubResource {
  name: string;
  url: string;
}
