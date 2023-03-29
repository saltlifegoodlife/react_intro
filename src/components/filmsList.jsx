import React, { Component } from "react";

class FilmsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }
  getFilms() {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        this.setState({
          list: result,
        });
      })
      .catch((err) => {
        console.err(err);
      });
  }

  componentDidMount() {
    this.getFilms();
  }

  render() {
    return (
      <ul>
        {this.state.list.map((e) => {
          return <li key={e.id}>{e.title}</li>;
        })}
      </ul>
    );
  }
}

export default FilmsList;
