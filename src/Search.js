import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// The Search component will search for movies using the TMDb API
const Search = () => {
  const [query, setQuery] = useState(""); // State to store the search query
  const [movies, setMovies] = useState([]); // State to store the search results

  // Fetch movies from the TMDb API whenever the query changes
  useEffect(() => {
    if (query.length > 2) {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWJmYTQwMDMyYzBiNTQ2MDdkNGE0MTAyNDQzMWU1NyIsIm5iZiI6MTcyMTYxNjU4MS4xNjA0MTIsInN1YiI6IjY2NjcwYTcwNjZkZWQ2ZGJiODFjMzY4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rsionnL4HnTYj-J1hHVqre3c83nrx9duvoJ_mgnXRzw",
        },
      })
        .then((response) => response.json()) // Convert response to JSON
        .then((data) => {
          if (data.results) {
            setMovies(data.results); // Update movies state with fetched data
          }
        });
    }
  }, [query]);

  return (
    <div>
      <h1>Movie Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update the query state when user types text in the input field
        placeholder="Search for a movie..."
      />
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>{" "}
            {/* Link to the movie detail page */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
