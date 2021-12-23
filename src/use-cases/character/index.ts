import ApiCaller from '../apiCaller';
import Character from '../../models/character';

export default class CharacterUseCases {
  private readonly RESOURCE = 'character';

  private readonly baseUrl: string;

  private readonly apiCaller: ApiCaller<Character>;

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.apiCaller = new ApiCaller<Character>(this.baseUrl, this.RESOURCE);
  }

  public async getAllCharacters(): Promise<Array<Character>> {
    return this.apiCaller.getAll();
  }
}
