import React, { useContext } from "react";
import { MovieContext } from "../App";

export default function Card(props) {
  const movieInfo = useContext(MovieContext);

  return (
    <div className="card-container">
      <div className="card-image">
        <img src={props.img} alt="" />
      </div>

      <div className="dropdown">
        <select
          onChange={(e) =>
            movieInfo.ContextDispatch({ type: e.target.value, id: props.id,movie:props })
          }
        >
          <option value="" disabled="">
            Move to...
          </option>
          <option value="WatchList">Watchlist</option>
          <option value="WatchedList">Watched</option>
          <option value="none"> None</option>
        </select>
      </div>
      <div className="card-info">
        <h3>{props.Title}</h3>
        <p>
          <b>Date : </b>
          {props.date}
        </p>
      </div>
    </div>
  );
}
