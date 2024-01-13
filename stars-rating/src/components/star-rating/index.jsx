import { useState } from "react";
import "./styles.css";

export default StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleMouseCick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  const handleMouseOver = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <span
            key={index}
            className={`fa fa-star ${
              index <= (hover || rating) ? "checked" : ""
            }`}
            onClick={() => handleMouseCick(index)}
            onMouseOver={() => handleMouseOver(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          ></span>
        );
      })}
    </div>
  );
};
