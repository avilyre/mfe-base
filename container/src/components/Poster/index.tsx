import "./styles.scss";

import { Star } from "lucide-react";
import { ComponentProps } from "react";

interface PosterProps {
  title: string;
  isFavorited: boolean;
  image: ComponentProps<"img">;
}

export const Poster = (props: PosterProps) => {
  const { title, isFavorited, image } = props;

  return (
    <article
      className="poster-container"
      style={{
        backgroundImage: `url(${image.src})`
      }}
    >
      <a href="#" className="poster-overlay">
        <button className={`poster-favorite-button ${isFavorited ? "active" : ""}`} type="button">
          <Star />
        </button>
        <h3 className="poster-title">{title}</h3>
      </a>
    </article>
  )
}