export default interface ApiResponse<Resource> {
  info: ResponseInfo;
  results: Array<Resource>;
}

interface ResponseInfo {
  count: number;
  pages: number;
  next: string;
  prev: string
}
