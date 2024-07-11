import "./styles.scss";

import { useEffect, useState } from "react";

import { Poster } from "../../components/Poster";
import { getMovies } from "../../services/get-movies";
import { Movie } from "../../@types/movie";

const HomePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const loadMovies = async () => {
    const result = await getMovies("/movie/popular");
    setMovies(result);
  }

  useEffect(() => { loadMovies() }, []);

  return (
    <section>
      <header>
        <h2 className="section-title">catálogo</h2>
      </header>

      <div className="section-posters-container">
        {movies.map(movie => (
          <Poster
            key={movie.id}
            data={{
              id: movie.id,
              title: movie.title,
              isFavorited: true,
              image: {
                src: movie.poster_path
              }
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default HomePage;