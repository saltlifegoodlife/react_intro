import React, { useState, useEffect } from "react";
import {
  filterFilmsByDirector,
  getListOf,
  getFilmStats,
} from "../helpers/film.helpers";
import { Link } from "react-router-dom";
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
  let filmStats = getFilmStats(list);

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
            <option value="" key="All">
              All
            </option>
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
      <div>
        <div>
          <span># Of Films: </span>
          <span>{filmStats.total}</span>
        </div>
        <div>
          <span>Average Rating</span>
          <span>{filmStats.avg_score.toFixed(2)}</span>
        </div>
        <div>
          <span>Latest Film Date:</span>
          <span>{filmStats.latest}</span>
        </div>
      </div>
      <ul>
        {filmsByDirector.map((e) => {
          return (
            <div>
              <li key={e.id}>
                <Link to={`/film/${e.id}`}>{e.title}</Link>
              </li>
              <img src={e.image} alt="" />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default FilmsPage;
