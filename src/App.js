// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./Search";
import MovieDetail from "./MovieDetail";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Search />} />{" "}
          {/* Route for the search page */}
          <Route path="/movie/:id" element={<MovieDetail />} />{" "}
          {/* Route for the movie detail page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
