import "./styles.scss";

import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import { Movie } from "../../@types/movie";
import { Poster } from "../Poster";
import { OutletContextType } from "../../@types/outlet-context-type";
import { useFavorites } from "../../hooks/use-favorites";
import { getMovies } from "../../services/get-movies";

interface MoviesListProps {
  filterBy?: "favorites"
}

export const MoviesList = (props: MoviesListProps) => {
  const { filterBy } = props;
  
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
          const isFavoritedMovie = favorites.indexOf(String(movie.id)) > -1;
          if (isFavoritedMovie) return movie;
        })
      break;
      default:
        moviesList = fetchedMovies;
    }

    return moviesList;
  }

  const loadMovies = async () => {
    const result = await getMovies("/movie/popular");
    setFetchedMovies(result);
  }

  const effecLoadMovies = () => {
    loadMovies();
  }

  useEffect(effecLoadMovies, []);

  const movies = moviesData();

  return (
    <div className="posters-container">
      {(movies).map(movie => {
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