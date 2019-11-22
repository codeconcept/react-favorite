import React from "react";
import "./App.css";
import foodItems from "./fakeFoodService";
import Favorite from "./Favorite";
import Food from "./Food";
import movieItems from "./fakeMovieService";
import Movie from "./Movie";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Add to favorite</h3>
        {foodItems.map(fi => (
          <Favorite key={fi.id} color="#7fc50e">
            <Food title={fi.title} />
          </Favorite>
        ))}
        <br />
        <br />
        <br />
        {movieItems.map(mi => (
          <Favorite key={mi.id} color="#c51d3c">
            <Movie title={mi.title} year={mi.year} />
          </Favorite>
        ))}
      </header>
    </div>
  );
}

export default App;
