import { ApiResponse } from './type';

class Client {
  constructor(private baseUrl: string) {}

  async get<T = unknown>(endpoint: string): Promise<ApiResponse<T | null>> {
    const res = await fetch(`${this.baseUrl}/${endpoint}`);

    if (res.ok) {
      const data = await res.json();

      return {
        data,
        status: res.status,
        statusMessage: res.statusText,
      };
    }

    return {
      data: null,
      status: res.status,
      statusMessage: res.statusText,
    };
  }
}

export const client = new Client(process.env.NEXT_PUBLIC_BASE_URL ?? '');
