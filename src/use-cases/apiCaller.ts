import axios from 'axios';
import ApiResponse from '../models/apiResponse';

export default class ApiCaller<Resource> {
  baseUrl: string;

  resource: string;

  constructor(baseUrl: string, resource: string) {
    this.baseUrl = baseUrl;
    this.resource = resource;
  }

  public async getAll(): Promise<Array<Resource>> {
    let url: string = this.getUrl();
    let resources: Array<Resource> = [];
    while (url != null) {
      // eslint-disable-next-line no-await-in-loop
      const response = await this.makeRequest(url);
      resources = resources.concat(response.results);
      url = response.info.next;
    }
    return resources;
  }

  private getUrl(): string {
    return `${this.baseUrl}/${this.resource}`;
  }

  // eslint-disable-next-line class-methods-use-this
  private async makeRequest(url: string): Promise<ApiResponse<Resource>> {
    const response = await axios.request<ApiResponse<Resource>>({
      url,
    });

    return response.data;
  }
}
