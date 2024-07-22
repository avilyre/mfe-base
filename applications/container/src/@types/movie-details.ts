export type MovieDetails = {
  title: string;
  poster_path: string;
  vote_average: string;
  release_date: string;
  overview: string;       
  genres: {
    id: number;
    name: string;
  }[];
  production_companies: {
    id: number;
    name: string;
  }[];
}