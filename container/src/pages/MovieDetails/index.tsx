import "./styles.scss";

import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Rate } from "../../components/Rate";
import { Poster } from "../../components/Poster";

export const MovieDetails = () => {
  const navigate = useNavigate();

  const movieRate = 4;

  const handleGoBack = () => navigate(-1);

  return (
    <section className="movie-details-container">
      <button onClick={handleGoBack} className="go-back-button">
        <ChevronLeft /> CATÁLOGO
      </button>
      <div className="movie-details">
        <Poster
          isViewOnly
          className="movie-details-poster"
          data={{
            id: 12312,
            title: "Divertidamente 2",
            isFavorited: true,
            image: {
              src: "https://image.tmdb.org/t/p/w500/9h2KgGXSmWigNTn3kQdEFFngj9i.jpg"
            }
          }}
        />

        <h1>Divertidamente 2</h1>
        <Rate rate={movieRate} />
      </div>
    </section>
  );
}

export default MovieDetails;