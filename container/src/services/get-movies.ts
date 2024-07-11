import { ApiResponse } from "../@types/api-response";
import { api } from "../lib/api";
import { FetchError } from "../@data/errors/fetch-error";

export const getMovies = async (url: string, pageNumber: number = 1) => {
  try {
    const { data: movies } = await api.get<ApiResponse>(`${url}?api_key=${process.env.MOVIE_DB_API_KEY}&language=pt-BR&page=${pageNumber}`);
    return movies.results;
  } catch {
    throw new FetchError("Failed to fetch movies");
  }
}