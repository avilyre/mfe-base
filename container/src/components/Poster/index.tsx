import "./styles.scss";

import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { ComponentProps, Fragment, ReactNode } from "react";

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

  const OverlayTypeComponent = (children: ReactNode) => {
    if (isViewOnly) return <div>{children}</div>

    return (
      <Link to={`/movie/${data.id}`} className="poster-overlay">
        {children}
      </Link>
    )
  }

  return (
    <article
      className={`poster-container ${className} ${isViewOnly && "view-only"}`}
      style={{
        backgroundImage: `url(${data.image.src})`,
        ...style
      }}
    >
      {OverlayTypeComponent(!isViewOnly && (
        <Fragment>
          <button className={`poster-favorite-button ${data.isFavorited && "active"}`} type="button">
            <Star />
          </button>
          <h3 className="poster-title">{data.title}</h3>
        </Fragment>
      ))}
    </article>
  )
}