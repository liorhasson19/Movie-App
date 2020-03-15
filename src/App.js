import React from "react";
import "./App.css";
import ClockComponent from "./components/ClockComponent/ClockComponent";
import ActorsGallery from "./pages/ActorsGallery";
import MoviesGallery from "./pages/MoviesGallery";

const App = () => {
  return (
    <div className="App">
      <div className="app-header">
        <h1>Lior's Actor / Movie Gallery</h1>
      </div>
      <h3>
        <ClockComponent name="Lior" />
      </h3>
      <ActorsGallery />
      <MoviesGallery />
    </div>
  );
};

export default App;
