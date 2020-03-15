import React, { Component } from "react";
import MovieSearchBox from "../components/SearchBox/MovieSearchBox";
import { Container, Row, Col } from "react-bootstrap";
import MovieComp from "../components/MovieComp/MovieComp";
import MovieModel from "../models/MovieModel";
import Axios from "axios";

export default class MoviesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieSearchResults: [],
      movieSearchResultStrings: [],
      movies: []
    };

    this.addMovie = this.addMovie.bind(this);
  }

  searchMovies = searchText => {
    if (searchText === "") {
      this.setState({
        movieSearchResults: [],
        movieSearchResultStrings: []
      });
    } else {
      const searchURL =
        "https://api.themoviedb.org/3/search/movie?api_key=77cc9523668c3dd019a1c3282e7b7141&query=" +
        searchText;

      Axios.get(searchURL).then(response1 => {
        this.setState({
          movieSearchResults: response1.data.results,
          movieSearchResultStrings: response1.data.results.map(
            result => result.title
          )
        });
      });
    }
  };

  async addMovie(index) {
    const details =
      "https://api.themoviedb.org/3/movie/" +
      this.state.movieSearchResults[index].id +
      "/credits?api_key=77cc9523668c3dd019a1c3282e7b7141&language=en-US";
    const credits =
      "https://api.themoviedb.org/3/movie/" +
      this.state.movieSearchResults[index].id +
      "?api_key=77cc9523668c3dd019a1c3282e7b7141&language=en-US";
    const promise1 = await Axios.get(details);
    const promise2 = await Axios.get(credits);
    const promises = [promise1, promise2];
    Promise.all(promises).then(responses => {
      this.setState({
        movieDetailsResult: promises[1].data.runtime,
        movieCreditsResult: promises[0].data.cast[0].name
      });
    });
    // Here I could call another function from TMDB to get additional actor data

    // var director = promises[0].data.crew.map(person => {
    //   if (person.department === "Directing") {
    //     return (person.name + " , ");
    //   }
    // });

    var director = "";
    for (let i = 0; i < promises[0].data.crew.length; i++) {
      if (promises[0].data.crew[i].department === "Directing") {
        //director.replace(".", "  , ");
        director = promises[0].data.crew[i].name + " .";
        break;
      }
    }
    const newMovie = new MovieModel(
      this.state.movieSearchResults[index].title,
      this.state.movieSearchResults[index].poster_path,
      this.state.movieSearchResults[index].id,
      promises[1].data.runtime,
      promises[0].data.cast[0].name,
      promises[0].data.cast[1].name,
      promises[0].data.cast[2].name,
      director
    );

    this.setState({
      movies: this.state.movies.concat(newMovie),
      movieSearchResults: [],
      movieSearchResultStrings: [],
      movieDetailsResult: []
    });
  }

  render() {
    const { movieSearchResultStrings, movies } = this.state;

    const movieComp = movies.map((movie, index) => (
      <Col md={4} key={index}>
        <MovieComp movie={movie} />
      </Col>
    ));

    return (
      <div>
        <Container>
          <MovieSearchBox
            searchPlaceholder="Search Movie"
            results={movieSearchResultStrings}
            onSearchChange={this.searchMovies}
            onSelectedResult={this.addMovie}
          />
          <Row>{movieComp}</Row>
        </Container>
      </div>
    );
  }
}
