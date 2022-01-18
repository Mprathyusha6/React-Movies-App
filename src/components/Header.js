import React from "react";

export default function Header(){
    return(
        <div className="banner">
        <h1>Welcome.</h1>
        <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
            <div>
                
                <input type="text" placeholder="Search for a movie, TV show or artist"/>
                 <input type="button" value="Search"/>
            </div>
        </div>
    )
}