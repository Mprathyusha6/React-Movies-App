import React, { useContext} from "react";
import Header from "./Header";
import Card from "./Card";
import { MovieContext } from "../App";

export default function Home() {
  const movieInfo = useContext(MovieContext);
  
  
  // const handleSubmit = () => {
  //   setstate((prev) => {
  //     return movieInfo.Contextdata.AllData.filter(function (item) {
  //       return item.Title.toLocaleLowerCase().includes(
  //         inputvalue.toLocaleLowerCase()
  //       );
  //     });
  //   });
  //   console.log(state);
  // };


  return (
    <div>
      <Header  />
      <div className="flex">
        {movieInfo.Contextdata.searchResult.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}
