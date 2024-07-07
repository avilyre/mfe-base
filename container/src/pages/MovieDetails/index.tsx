import "./styles.scss";

import { ChevronLeft } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { Rate } from "../../components/Rate";

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
        <h1>Divertidamente 2</h1>
        
        <Rate rate={movieRate} />
      </div>
    </section>
  );
}

export default MovieDetails;