import React,{useReducer,createContext} from 'react';
import './App.css';
import './components/movie.css'
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Watchlist from './components/WatchList';
import Home from './components/Home';
import WatchedList from './components/WatchedList';
import MovieData from './components/movieData'


export const MovieContext=createContext({})
const initialstate=MovieData;
const reducer=(state,action)=>{
  switch (action.type) {
    case 'none':
      return  state.map(el => (el.id === action.id ? {...el, status: ''} : el))
    case 'WatchList':
        return  state.map(el => (el.id === action.id ? {...el, status: 'WatchList'} : el))

    
    case 'WatchedList':
        return  state.map(el => (el.id === action.id ? {...el, status: 'WatchedList'} : el))
      
    default:
    
      return state;
  }

}

function App() {
// console.log(initialstate)
  const [Moviedata,dispatch]=useReducer(reducer,initialstate)

  return (
    <BrowserRouter>
    <MovieContext.Provider value={{Contextdata:Moviedata,ContextDispatch:dispatch}}>
    <div className='page'>
       <Navbar/>
       <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/components/WatchList" element={<Watchlist/>}/>
       <Route path="/components/WatchedList" element={<WatchedList/>}/>
       </Routes>


       
    </div>
    </MovieContext.Provider>
    </BrowserRouter>
  );
}

export default App;

