import { ApiResponse } from "../@types/api-response";
import { api } from "../lib/api";
import { FetchError } from "../@data/errors/fetch-error";
import { MovieDetails } from "../@types/movie-details";

export const getMovieDetails = async (id: string) => {
  try {
    const { data: movie } = await api.get<MovieDetails>(`/movie/${id}?api_key=${process.env.MOVIE_DB_API_KEY}&language=pt-BR`);
    return movie;
  } catch {
    throw new FetchError("Failed to fetch the movie details.");
  }
}