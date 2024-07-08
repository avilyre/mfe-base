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
      <article className="movie-details">
        <div className="movie-details-poster-container">
          <Poster
            isViewOnly
            data={{
              id: 12312,
              title: "divertidamente 2",
              isFavorited: true,
              image: {
                src: "https://image.tmdb.org/t/p/w500/9h2KgGXSmWigNTn3kQdEFFngj9i.jpg"
              }
            }}
          />
        </div>

        <div className="movie-details-info">
          <h1 className="movie-details-title">divertidamente 2</h1>
          <Rate rate={movieRate} className="movie-details-rate" />
          <p>
            <span className="strong-text">gênero: </span>
            ação, aventura, animação
          </p>
          <p>
            <span className="strong-text">produtora: </span> pixar
            {" - "}
            <span className="strong-text">ano: </span> <time dateTime="2024-01-01">2024</time>
          </p>

          <p className="strong-text movie-details-description-title">descrição:{" "}</p>
          <h2 className="movie-details-description">lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</h2>
        </div>
      </article>
    </section>
  );
}

export default MovieDetails;