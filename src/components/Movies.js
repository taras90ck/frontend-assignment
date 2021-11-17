import * as React from "react";

import { useMovies } from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import styles from "./Movies.module.css";

const MovieDetails = React.lazy(() => import("./MovieDetails"));

const Movies = ({ query }) => {
  const movies = useMovies(query);
  const [selectedMovie, setSelectedMovie] = React.useState(null);
  const resetSelectedMovie = React.useCallback(() => setSelectedMovie(null), []);

  return (
    <div>
      {movies === undefined ? (
        <div>
          <span>loading...</span>
        </div>
      ) : movies instanceof Error ? (
        <div className={styles.error}>
          <span>Error: {movies.toString()}</span>
        </div>
      ) : (
        <div className={styles.content}>
          <h1 className={styles.title}>{query ? `Movies matching "${query}"` : "Most Recent Movies"}</h1>
          <div className={styles.cards}>
            {movies.map((movie) => (
              <MovieCard key={movie.id} onClick={setSelectedMovie} {...movie} />
            ))}
          </div>
          {selectedMovie && (
            <React.Suspense fallback={null}>
              <MovieDetails handleClose={resetSelectedMovie} {...selectedMovie} />
            </React.Suspense>
          )}
        </div>
      )}
    </div>
  );
};

export default Movies;
