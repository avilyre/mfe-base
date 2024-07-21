import "./styles.scss";

import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import { Movie } from "../../@types/movie";
import { Poster } from "../Poster";
import { OutletContextType } from "../../@types/outlet-context-type";
import { useFavorites } from "../../hooks/use-favorites";
import { getMovies } from "../../services/get-movies";
import { ApiRequestURL } from "../../@types/api-request-url";

interface MoviesListProps {
  requestFrom: ApiRequestURL;
  filterBy?: "favorites"
}

export const MoviesList = (props: MoviesListProps) => {
  const { filterBy, requestFrom } = props;
  
  const { search } = useOutletContext<OutletContextType>();
  const { favorites, favoriteAction } = useFavorites();
  
  const [fetchedMovies, setFetchedMovies] = useState<Movie[]>([]);
  
  const isSearching = search.length > 0;

  const moviesData = () => {
    let moviesList: Movie[];

    if (isSearching) {
      moviesList = fetchedMovies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));
      return moviesList;
    }

    switch (filterBy) {
      case "favorites":
        moviesList = fetchedMovies.filter(movie => {
          const isFavoriteMovie = favorites.indexOf(String(movie.id)) > -1;
          if (isFavoriteMovie) return movie;
        })
      break;
      default:
        moviesList = fetchedMovies;
    }

    return moviesList;
  }

  const loadMovies = async () => {
    const result = await getMovies(requestFrom);
    setFetchedMovies(result);
  }

  const effectLoadMovies = () => {
    loadMovies();
  }

  useEffect(effectLoadMovies, []);

  const movies = moviesData();

  return (
    <div className="posters-container">
      {(movies).map(movie => {
        const isFavorite = favorites.some(favorite => favorite === String(movie.id))

        return (
          <Poster
            key={movie.id}
            favoriteAction={favoriteAction}
            data={{
              id: movie.id,
              title: movie.title,
              isFavorite,
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