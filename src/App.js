import React, { useReducer, createContext } from "react";
import "./App.css";
import "./components/movie.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Watchlist from "./components/WatchList";
import Home from "./components/Home";
import WatchedList from "./components/WatchedList";
import MovieData from "./components/movieData";

export const MovieContext = createContext({});
const initialstate = {
  AllData: MovieData,
  searchResult: [],
  Watchlist: [],
  WatchedList: [],
};
const handleSubmit = (state, action) => {
  
  return{
    ...state,
    searchResult: state.AllData.filter(function (item) {
    return item.Title.toLocaleLowerCase().includes(
      action.inputvalue.toLocaleLowerCase()
    );
  })}
};

function isExists(arr, id) {
  return arr.some(function (el) {
    return el.id === id;
  });
}
const removeFromWatchAndWatchedlists = (state, action) => {
  let WatchedListitems = state.WatchedList;
  let WatchListitems = state.Watchlist;
  if (isExists(state.WatchedList, action.id)) {
    WatchedListitems = state.WatchedList.filter(
      (item) => item.id !== action.id
    );
  } else if (isExists(state.Watchlist, action.id)) {
    WatchListitems = state.Watchlist.filter((item) => item.id !== action.id);
  }
  return {
    ...state,
    Watchlist: WatchListitems,
    WatchedList: WatchedListitems,
  };
};
const addToWatchlist = (state, action) => {
  if (!isExists(state.Watchlist, action.id)) {
    let WatchedListitems = state.WatchedList;
    if (isExists(state.WatchedList, action.id)) {
      WatchedListitems = state.WatchedList.filter(
        (item) => item.id !== action.id
      );
    }
    return {
      ...state,
      Watchlist: state.Watchlist.concat(action.movie),
      WatchedList: WatchedListitems,
    };
  } else {
    return state;
  }
};
const addToWatchedList = (state, action) => {
  if (!isExists(state.WatchedList, action.id)) {
    let WatchListitems = state.Watchlist;
    if (isExists(state.Watchlist, action.id)) {
      WatchListitems = state.Watchlist.filter((item) => item.id !== action.id);
    }
    return {
      ...state,
      WatchedList: state.WatchedList.concat(action.movie),
      Watchlist: WatchListitems,
    };
  } else {
    return state;
  }
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Search":
      return  handleSubmit(state, action);
    
    case "none":
      return removeFromWatchAndWatchedlists(state, action);
    case "WatchList":
      return addToWatchlist(state, action);
    case "WatchedList":
      return addToWatchedList(state, action);

    default:
      return state;
  }
};

function App() {
  // console.log(initialstate)
  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <BrowserRouter>
      <MovieContext.Provider
        value={{ Contextdata: state, ContextDispatch: dispatch }}
      >
        <div className="page">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components/WatchList" element={<Watchlist />} />
            <Route path="/components/WatchedList" element={<WatchedList />} />
          </Routes>
        </div>
      </MovieContext.Provider>
    </BrowserRouter>
  );
}

export default App;
