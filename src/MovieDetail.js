import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// The MovieDetail component displays detailed information about a selected movie
const MovieDetail = () => {
  const { id } = useParams(); // Get the movie ID from the URL parameters
  const [movie, setMovie] = useState(null); // State to store the movie details

  // Fetch movie details from the TMDb API
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWJmYTQwMDMyYzBiNTQ2MDdkNGE0MTAyNDQzMWU1NyIsIm5iZiI6MTcyMTYxNjU4MS4xNjA0MTIsInN1YiI6IjY2NjcwYTcwNjZkZWQ2ZGJiODFjMzY4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rsionnL4HnTYj-J1hHVqre3c83nrx9duvoJ_mgnXRzw",
      },
    })
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => setMovie(data)); // Update movie state with fetched data
  }, [id]);

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
};

export default MovieDetail;
