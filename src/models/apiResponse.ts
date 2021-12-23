export default interface ApiResponse<Resource> {
  info: ResponseInfo;
  results: Array<Resource>;
}

export interface ResponseInfo {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}
