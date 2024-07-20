import "./styles.scss";

import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import { Movie } from "../../@types/movie";
import { Poster } from "../Poster";
import { OutletContextType } from "../../@types/outlet-context-type";
import { useFavorites } from "../../hooks/use-favorites";
import { getMovies } from "../../services/get-movies";

interface MoviesListProps {}

export const MoviesList = (props: MoviesListProps) => {
  const { search } = useOutletContext<OutletContextType>();
  
  const isMoviesFilterEnabled = search.length > 0;

  const { favorites, favoriteAction } = useFavorites();
  
  const [movies, setMovies] = useState<Movie[]>([]);

  const loadMovies = async () => {
    const result = await getMovies("/movie/popular");
    setMovies(result);
  }

  const effecLoadMovies = () => {
    loadMovies();
  }

  useEffect(effecLoadMovies, []);

  const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="posters-container">
      {(isMoviesFilterEnabled ? filteredMovies : movies).map(movie => {
        const isFavorited = favorites.some(favorited => favorited === String(movie.id))

        return (
          <Poster
            key={movie.id}
            favoriteAction={favoriteAction}
            data={{
              id: movie.id,
              title: movie.title,
              isFavorited: isFavorited,
              image: {
                src: movie.poster_path
              }
            }}
          />
        );
      })}
    </div>
  );
}