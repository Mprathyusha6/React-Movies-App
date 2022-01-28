import React, { useContext } from "react";
import Card from "./Card";
import { MovieContext } from "../App";

export default function Watchlist() {
  const movieInfo = useContext(MovieContext);
  return (
    <div>
      <div className="flex">
        {movieInfo.Contextdata.Watchlist.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
