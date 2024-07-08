import { ComponentProps } from "react";
import "./styles.scss";

import { Star } from "lucide-react"

interface RateProps extends ComponentProps<"div"> {
  rate: number;
}

export const Rate = (props: RateProps) => {
  const { rate = 0, className, ...rest } = props;

  const numberOfTotalStars = 5;
  const numberOfStars = Math.ceil(rate);

  return (
    <div className={`rate-container ${className}`} {...rest}>
      {Array.from({ length: numberOfTotalStars }).map((_, index) => {
        const isRatedStar = index < numberOfStars;

        const StarResult = isRatedStar
        ? <Star className="star rated" />
        : <Star className="star" />;

        return StarResult;
      })}
    </div>
  )
}