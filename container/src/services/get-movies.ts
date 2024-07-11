import { ApiResponse } from "../@types/api-response";
import { api } from "../lib/api";

export const getMovies = async (url: string, pageNumber: number = 1) => {
  const { data: movies } = await api.get<ApiResponse>(`${url}?api_key=${process.env.MOVIE_DB_API_KEY}&language=pt-BR&page=${pageNumber}`);
  return movies.results;
}