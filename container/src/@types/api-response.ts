import { Movie } from "./movie";

export type ApiResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}