import { ServerStore } from "@stores/server-store";import { AxiosHttpClient, HttpClient } from "@lib/http-client";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL!;
export const httpClient: HttpClient = new AxiosHttpClient(baseURL)

export const serverStore: ServerStore = new ServerStore()