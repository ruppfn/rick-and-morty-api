import { ResponseInfo } from '../../src/models/apiResponse';

export default class ResponseInfoMother {
  public static default(): ResponseInfo {
    return {
      count: 51,
      pages: 3,
      next: 'https://rickandmortyapi.com/api/episode?page=2',
      prev: null,
    };
  }
}
