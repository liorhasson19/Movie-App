import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./MovieComp.css";

// Props
// actor. an instance of ActorModel
export default class MovieComp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movie } = this.props;

    return (
      <div>
        <div className="movie-card">
          <img
            className="movie-poster"
            src={movie.posterURL}
            alt="Movie_Poster"
          />

          <div>
            <div className="card-details">
              <span className="titles">Title:</span>
              {" " + movie.title}
              <br />
              <span className="titles">Length:</span>
              {" " + movie.runtime + " "} minutes
              <br />
              <span className="titles">Director:</span>
              {" " + movie.director}
              <br />
              <span className="titles">Actors:</span>
              {" " + movie.firstMainStars} {", " + movie.secondMainStars}
              {", " + movie.thirdMainStars}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
