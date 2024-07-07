import "./styles.scss";

import { Star } from "lucide-react"

interface RateProps {
  rate: number;
}

export const Rate = (props: RateProps) => {
  const { rate = 0 } = props;

  const numberOfTotalStars = 5;
  const numberOfStars = Math.ceil(rate);

  return (
    <div className="rate-container">
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