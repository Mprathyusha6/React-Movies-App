import React,{useState,useContext} from "react";
import { MovieContext } from "../App";

export default function Header() {
  const movieInfo = useContext(MovieContext);
  const [inputvalue, setInputvalue] = useState("");
 
  return (
    <div className="banner">
      <h1>Welcome.</h1>
      <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
      <div>
        <input
          type="text"
          onChange={event => setInputvalue(event.target.value)}
          placeholder="Search for a movie, TV show or artist"
        />
        <input type="button" onClick={(e)=> movieInfo.ContextDispatch({ type:"Search",inputvalue:inputvalue})} value="Search" />
      </div>
    </div>
  );
}
