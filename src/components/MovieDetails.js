import Modal from "./Modal";
import styles from "./MovieDetails.module.css";

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const MovieDetails = ({ handleClose, ...movie }) => {
  return (
    <Modal handleClose={handleClose}>
      <div className={styles.container}>
        <div className={styles.title}>
          <span>{movie.title}</span>
        </div>
        <div className={styles.content}>
          <div className={styles.media}>
            <img src={`${process.env.REACT_APP_API_BASE_IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
          </div>
          <div className={styles.text}>
            <span>
              <b>Release date:</b> {formatDate(movie.release_date)}
            </span>
            <span>{movie.overview}</span>
            <span>
              <b>{movie.vote_average}</b> / 10 ({movie.vote_count} total votes)
            </span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MovieDetails;
