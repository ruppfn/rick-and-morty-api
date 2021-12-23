import Location from '../../models/location';
import ApiCaller from '../apiCaller';
import BaseUseCase from '../baseUseCase';

export default class LocationUseCases implements BaseUseCase {
  private readonly RESOURCE = 'location';

  private readonly baseUrl: string;

  private readonly apiCaller: ApiCaller<Location>;

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.apiCaller = new ApiCaller<Location>(this.baseUrl, this.RESOURCE);
  }

  public async getAll(): Promise<Array<Location>> {
    return this.apiCaller.getAll();
  }
}
