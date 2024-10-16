export interface ApiResponse<T> {
  status: number;
  statusMessage: string;
  data: T;
}
