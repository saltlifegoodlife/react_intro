import React, { useState } from "react";
import "./App.css";
import FilmsList from "./components/filmsList";

function App() {
  const [list, setList] = useState(["ready", "set", "GO"]);
  const [text, setText] = useState("");

  let onSubmit = (event) => {
    event.preventDefault();
    let newList = [...list, text];
    setList(newList);
    setText("");
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <FilmsList />
    </div>
  );
}

export default App;
