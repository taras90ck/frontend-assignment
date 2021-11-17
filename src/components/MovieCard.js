import * as React from "react";

import styles from "./MovieCard.module.css";

const MovieCard = React.memo(({ onClick, ...movie }) => {
  const handleClick = () => onClick(movie);

  return (
    <button type="button" className={styles.container} onClick={handleClick}>
      <div className={styles.content}>
        <div
          className={styles.media}
          style={{
            backgroundImage: `url(${process.env.REACT_APP_API_BASE_IMAGE_URL}${movie.poster_path})`,
          }}
        >
          <div className={styles.rating}>
            <span>{movie.vote_average}</span>
          </div>
        </div>

        <div className={styles.title}>
          <span>{movie.title}</span>
        </div>
      </div>
    </button>
  );
});

export default MovieCard;
