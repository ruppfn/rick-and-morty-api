import ApiCaller from '../apiCaller';
import Character from '../../models/character';
import BaseUseCase from '../baseUseCase';

export default class CharacterUseCases implements BaseUseCase {
  private readonly RESOURCE = 'character';

  private readonly baseUrl: string;

  private readonly apiCaller: ApiCaller<Character>;

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.apiCaller = new ApiCaller<Character>(this.baseUrl, this.RESOURCE);
  }

  public async getAll(): Promise<Array<Character>> {
    return this.apiCaller.getAll();
  }
}
