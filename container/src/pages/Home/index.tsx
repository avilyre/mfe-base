import "./styles.scss";

import { useEffect, useMemo, useState } from "react";

import { Poster } from "../../components/Poster";
import { getMovies } from "../../services/get-movies";
import { Movie } from "../../@types/movie";
import { useFavorites } from "../../hooks/use-favorites";
import { useOutletContext } from "react-router-dom";
import { OutletContentType } from "../../@types/outlet-context-type";

const HomePage = () => {
  const { search } = useOutletContext<OutletContentType>();
  
  const isMoviesFilterEnabled = search.length > 0;

  const { favorites, favoriteAction } = useFavorites();
  
  const [movies, setMovies] = useState<Movie[]>([]);

  const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))

  const loadMovies = async () => {
    const result = await getMovies("/movie/popular");
    setMovies(result);
  }

  const effecLoadMovies = () => {
    loadMovies();
  }

  useEffect(effecLoadMovies, []);

  return (
    <section>
      <header>
        <h2 className="section-title">catálogo</h2>
      </header>

      <div className="section-posters-container">
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
    </section>
  )
}

export default HomePage;