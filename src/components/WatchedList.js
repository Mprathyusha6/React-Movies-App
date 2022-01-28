import React, { useContext } from "react";
import Card from "./Card";
// import movieInfo from './movieData';
import { MovieContext } from "../App";

export default function WatchedList() {
  const movieInfo = useContext(MovieContext);
  return (
    <div>
      <div className="flex">
        {movieInfo.Contextdata.WatchedList.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}
