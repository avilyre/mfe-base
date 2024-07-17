import "./styles.scss";

import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { ComponentProps, Fragment, ReactNode } from "react";
import { useFavorites } from "../../hooks/use-favorites";

interface PosterProps extends ComponentProps<"article"> {
  isViewOnly?: boolean;
  data: {
    id: number;
    title: string;
    isFavorited: boolean;
    image: ComponentProps<"img">;
  }
}

export const Poster = (props: PosterProps) => {
  const {
    data,
    className,
    style,
    isViewOnly = false
  } = props;

  const { setFavorite, removeFavorite } = useFavorites();

  const OverlayTypeComponent = (children: ReactNode) => {
    if (isViewOnly) return <div>{children}</div>

    return (
      <div className="poster-overlay">
        <button
          className={`poster-favorite-button ${data.isFavorited && "active"}`}
          type="button"
          onClick={() => handleToggleFavorite(String(data.id))}
        >
          <Star />
        </button>
        <Link className="poster-overlay-link-area" to={`/movie/${data.id}`}>
          {children}
        </Link>
      </div>
    )
  }

  const handleToggleFavorite = data.isFavorited ? removeFavorite : setFavorite;

  return (
    <article
      className={`poster-container ${className} ${isViewOnly && "view-only"}`}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${data.image.src})`,
        ...style
      }}
    >
      {OverlayTypeComponent(!isViewOnly && (
        <Fragment>
          <h3 className="poster-title">{data.title}</h3>
        </Fragment>
      ))}
    </article>
  )
}