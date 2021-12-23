import Location from '../../models/location';
import ApiCaller from '../apiCaller';

export default class LocationUseCases {
  private readonly RESOURCE = 'location';

  private readonly baseUrl: string;

  private readonly apiCaller: ApiCaller<Location>;

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.apiCaller = new ApiCaller<Location>(this.baseUrl, this.RESOURCE);
  }

  public async getAllLocations(): Promise<Array<Location>> {
    return this.apiCaller.getAll();
  }
}
