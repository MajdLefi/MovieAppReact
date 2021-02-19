import React, { useState, useRef, useEffect } from "react";
import StarRatingComponent from "react-star-rating-component";
import { useLocation, Link } from "react-router-dom";
import "./MovieDescription.css";
const MovieDescription = () => {
  const [displayTrailer, setDisplayTrailer] = useState(false);
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.scrollIntoView();
  }, [displayTrailer]);

  let location = useLocation();
  const { title, description, posterUrl, rate, trailler } = location.state;

  const handleShow = () => {
    setDisplayTrailer(true);
  };

  return (
    <React.Fragment>
      <Link to="/">
        <button className="btn">
          <i class="far fa-arrow-alt-circle-left"></i>Go Back Home
        </button>
      </Link>

      <div className="movie">
        <div className="movie-image">
          <img src={posterUrl} alt="movieposter" />
        </div>
        <div className="movie-decription">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="rating-movie">
            <StarRatingComponent className="rating" name="rate" value={rate} />
            <h3>{`${rate}/5`}</h3>
          </div>
          <button className="btn-trailer" onClick={handleShow}>
            <i class="far fa-play-circle"></i>
            <span>watch trailler</span>
          </button>
        </div>
      </div>
      <div
        className="movie-trailler"
        style={displayTrailer ? { display: "block" } : { display: "none" }}
        ref={myRef}
      >
        <iframe
          title="movie trailler"
          width="956"
          height="538"
          src={trailler}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </React.Fragment>
  );
};

export default MovieDescription;