import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies</h1>
    <ul>{movies.name}</ul>
  </div>;
}

export default Movies;
