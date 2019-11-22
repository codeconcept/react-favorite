import React from "react";
import "./App.css";
import foodItems from "./fakeFoodService";
import Favorite from "./Favorite";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Add to favorite</h3>
        {foodItems.map(fi => (
          <Favorite key={fi.id}>
            {" "}
            <span>{fi.title}</span>
          </Favorite>
        ))}
      </header>
    </div>
  );
}

export default App;
