import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const getMoviesHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Someting went wrong");
      }
      const data = await response.json();
      const mappedMovies = data?.results?.map((movie) => {
        return {
          id: movie?.episode_id,
          title: movie?.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
        };
      });
      setMovies(mappedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  useEffect(() => {
    getMoviesHandler();
  }, [getMoviesHandler]);
  let content = <p>No movies to display.Please try to fetch</p>;
  if (error) {
    content = <p>{error}</p>;
  }
  if (movies.length > 0) {
    content = <MoviesList movies={movies}></MoviesList>;
  }
  if (isLoading) {
    content = <p>Loading......</p>;
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={getMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
