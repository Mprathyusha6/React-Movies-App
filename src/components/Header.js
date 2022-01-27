import React from "react";

export default function Header({onClick,inputref}) {
  return (
    <div className="banner">
      <h1>Welcome.</h1>
      <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
      <div>
        <input
          type="text"
          ref={inputref}
          placeholder="Search for a movie, TV show or artist"
        />
        <input type="button" onClick={onClick} value="Search" />
      </div>
    </div>
  );
}
