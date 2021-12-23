import BaseUseCase from '../baseUseCase';
import ApiCaller from '../apiCaller';
import Episode from '../../models/episode';

export default class EpisodeUseCases implements BaseUseCase {
  private readonly RESOURCE = 'episode';

  private readonly baseUrl: string;

  private readonly apiCaller: ApiCaller<Episode>;

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.apiCaller = new ApiCaller<Episode>(this.baseUrl, this.RESOURCE);
  }

  public async getAll(): Promise<Array<Episode>> {
    return this.apiCaller.getAll();
  }
}
