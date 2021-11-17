import * as React from "react";
import axios from "axios";

export const useMovies = (searchTerm) => {
  const [movies, setMovies] = React.useState();

  React.useEffect(() => {
    const source = axios.CancelToken.source();

    (async () => {
      try {
        const response = await axios({
          url: searchTerm ? "/search/movie" : "/movie/now_playing",
          baseURL: process.env.REACT_APP_API_DOMAIN,
          params: {
            api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
            query: searchTerm || undefined,
          },
          cancelToken: source.token,
        });

        setMovies(response?.data?.results || new Error("Failed to parse movies response."));
      } catch (e) {
        setMovies(e);
      }
    })();

    return () => {
      source.cancel();
    };
  }, [searchTerm]);

  return movies;
};
