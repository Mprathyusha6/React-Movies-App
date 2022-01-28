import React, { useContext } from "react";
import Header from "./Header";
import Card from "./Card";
import { useState } from "react";
import { MovieContext } from "../App";

export default function Home() {
  const movieInfo = useContext(MovieContext);
  const textInput = React.useRef(null);
  const [inputvalue, setInputvalue] = useState("");

  const SearchBar = () => {
    const name = textInput.current.value;
    setInputvalue((prev) => {
      return name;
    });
  };
  return (
    <div>
      <Header inputref={textInput} onClick={SearchBar} />
      <div className="flex">
        {movieInfo.Contextdata.AllData.filter(function (item) {
          return item.Title.toLocaleLowerCase().includes(
            inputvalue.toLocaleLowerCase()
          );
        }).map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}
