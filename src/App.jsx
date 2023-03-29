import React, { Component } from "react";
import "./App.css";
import FilmsList from "./components/filmsList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["ready", "set", "GO"],
      text: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    let newList = [...this.state.list, this.state.text];
    this.setState({
      list: newList,
      text: "",
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={(e) =>
              this.setState({
                text: e.target.value,
              })
            }
          />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <FilmsList />
      </div>
    );
  }
}

export default App;
