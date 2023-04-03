import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { HomePage, FilmsPage, SingleFilmPage } from "./pages/Index";
import "./App.css";

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
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/films">Films</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="films" element={<FilmsPage />}></Route>
        <Route path="film/:id" element={<SingleFilmPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
