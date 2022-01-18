import React, { useEffect, useState } from "react";
// import movieContext from "./movieContext";
// import movieData from "./movieData";


export default function Card(props){
    const [movie, setmovie] = React.useState(
        props
    )
    
    function handleOnchange(e) {
        setTimeout(function() { //Start the timer
            
        setmovie(prev => {
            return {
                ...prev,
                status: e.target.value
            }
        })//After 1 second, set render to true
        }.bind(this), 500)
    
    
        // setmovie(prev => {
        //     return {
        //         ...prev,
        //         status: e.target.value
        //     }
        // })
    
        console.log(movie) 
        console.log(movie.status)
    }

// console.log(e.target.value)
    
    return(
        
        <div className="card-container">
             <div className="card-image">
                 <img src={props.img} alt=""/>
             </div>
             
             <div className="dropdown">
             <select onChange={handleOnchange}>
             <option value="" disabled="" onChange={handleOnchange}>Move to...</option>
             <option value="watchlist" onChange={handleOnchange}>Watchlist</option>
             <option value="watched" onChange={handleOnchange}>Watched</option>
             <option value="none" onChange={handleOnchange}> None</option>
             </select>
             </div>
             <div className="card-info"> 
            <h3>{props.Title}</h3>
            <p><b>Date : </b>{props.date}</p>
            </div>
        </div>
    
    )
}