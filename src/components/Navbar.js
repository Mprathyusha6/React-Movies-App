import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>
            <h2>CINEMAdb</h2>
          </li>
        </Link>
      </ul>
      <ul>
        <Link to="/">
          <li>Movies</li>
        </Link>
        <Link to="/">
          <li>TVShows</li>
        </Link>
        <Link to="/">
          <li>More</li>
        </Link>
      </ul>
      <ul>
        <Link to="/components/WatchList">
          {" "}
          <li>Watchlist</li>
        </Link>
        <Link to="/components/WatchedList">
          {" "}
          <li>Watched</li>
        </Link>
      </ul>
    </nav>
  );
}
