import React from "react";
import StarRatingComponent from "react-star-rating-component";
import "./MovieCard.css";
const MovieCard = (props) => {
  const { title, description, posterUrl, rate }=props.movie
  return (
    <div className="card">
      <div className="poster">
        <img src={posterUrl} alt="posterUrl" />
      </div>
      <div className="details">
        <h2>{title}</h2>
        <div className="rating">
          <StarRatingComponent name="rate" value={rate} />
        </div>
        <div className="info">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;