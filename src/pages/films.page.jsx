import React, { useState, useEffect } from "react";
import { filterFilmsByDirector, getListOf } from "../helpers/film.helpers";
function FilmsPage(props) {
  const [list, setList] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");

  function getFilms() {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setList(result);
      })
      .catch((err) => {
        console.err(err);
      });
  }

  let filmsByDirector = filterFilmsByDirector(list, searchDirector);
  let directors = getListOf(list, "director");

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="director"></label>
          <select
            name="director"
            id=""
            value={searchDirector}
            onChange={(e) => {
              setSearchDirector(e.target.value);
            }}
          >
            <option value="">All</option>
            {directors.map((dir, idx) => {
              return (
                <option key={dir + idx} value={dir}>
                  {dir}
                </option>
              );
            })}
          </select>
        </div>
      </form>
      <ul>
        {filmsByDirector.map((e) => {
          return (
            <div>
              <li key={e.id}>{e.title}</li>
              <img src={e.image} alt="" />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default FilmsPage;
