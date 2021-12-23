import BaseResource from './baseResource';

export default interface Location extends BaseResource {
  type: string;
  dimension: string;
  residents: Array<string>;
}
