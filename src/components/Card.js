import React, { useContext, useState } from "react";
import { MovieContext } from "../App";



export default function Card(props){
    const movieInfo =useContext(MovieContext)
    // const {handleOnchange,}
    // const [singilemovie,b]=props
    const [movieData1,setMovieData]=useState(movieInfo.Contextdata)
    // const [movie, setmovie] = React.useState(
    //     props
    // )
    //   function handleOnchange(e) {
    //     setTimeout(function() { //Start the timer
            
    //     setmovie(prev => {
    //         return {
    //             ...prev,
    //             status: e.target.value
    //         }
    //     })//After 1 second, set render to true
    //     }.bind(this), 500)
    //     console.log(movie) 
    //     // console.log(movie.status)
    //     setMovieData(prev=>{
    //       return  prev.map(el => (el.id === movie.id ? {...el, status: e.target.value} : el))
    //       });
    //       console.log(movieData1)
    
    // }
    
    
    return(
        
        <div className="card-container">
             <div className="card-image">
                 <img src={props.img} alt=""/>
             </div>
             
             <div className="dropdown">
             <select onChange={(e)=>movieInfo.ContextDispatch({type:e.target.value,id:props.id})}>
             <option value="" disabled="">Move to...</option>
             <option value="WatchList">Watchlist</option>
             <option value="WatchedList">Watched</option>
             <option value="none" > None</option>
             </select>
             </div>
             <div className="card-info"> 
            <h3>{props.Title}</h3>
            <p><b>Date : </b>{props.date}</p>
            </div>
        </div>
    
    )
}