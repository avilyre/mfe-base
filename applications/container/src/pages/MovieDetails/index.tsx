import "./styles.scss";

import { ChevronLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import { Rate } from "../../components/Rate";
import { Poster } from "../../components/Poster";
import { Fragment, useEffect, useState } from "react";
import { getMovieDetails } from "../../services/get-movie-details";
import { MovieDetails as MovieDetailsType } from "../../@types/movie-details";

export const MovieDetails = () => {
  
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [movie, setMovie] = useState<MovieDetailsType>({} as MovieDetailsType);
  
  const movieRate = (Number(movie.vote_average) / 10) * 5;

  const handleGoBack = () => navigate(-1);

  const loadDetails = async () => {
    const result = await getMovieDetails(id);
    setMovie(result);
  }

  useEffect(() => { loadDetails() }, []);

  const isMovieLoaded = Object.keys(movie).length > 0

  if (!isMovieLoaded) return <p>loading movie...</p>

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
              title: movie.title,
              isFavorited: true,
              image: {
                src: movie.poster_path
              }
            }}
          />
        </div>

        <div className="movie-details-info">
          <h1 className="movie-details-title">
            {movie.title}
          </h1>
          <Rate rate={movieRate} className="movie-details-rate" />
          <p>
            <span className="strong-text">gênero: </span>
            {movie.genres.map((genre, index) => {
              const isLastGenre = movie.genres.length === ++index

              return (
                <Fragment>
                  <span key={genre.id}>{genre.name.toLowerCase()}</span>
                  {isLastGenre === false && ", "}
                </Fragment>
                
              );
            })}
          </p>
          <p>
            <span className="strong-text">produtora: </span>
            {movie.production_companies.map((company, index) => {
              const isLastCompany = movie.production_companies.length === ++index

              return (
                <Fragment>
                  <span key={company.id}>{company.name}</span>
                  {isLastCompany === false && ", "}
                </Fragment>
                
              );
            })}
            {" - "}
            <span className="strong-text">ano: </span> <time dateTime={movie.release_date}>
              {new Date(movie.release_date).getFullYear()}
            </time>
          </p>

          <p className="strong-text movie-details-description-title">descrição:{" "}</p>
          <h2 className="movie-details-description">
            {movie.overview.toLowerCase()}
          </h2>
        </div>
      </article>
    </section>
  );
}

export default MovieDetails;