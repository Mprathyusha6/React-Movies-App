import React from 'react';
import  ReactDOM  from 'react-dom';
import {Link} from 'react-router-dom' 




export default function Navbar(){
    return(
    <nav>
        <ul>
             <li><a href='#'><h2>CINEMAdb</h2></a></li>
        </ul>
        <ul>
            
        <Link to="/"><li>Movies</li></Link>
        <Link to="/"><li>TVShows</li></Link>
        <Link to="/"><li>More</li></Link>
            
        </ul>
        <ul>
        <Link to="/components/wishlist">  <li>Watchlist</li></Link>
        <li>Watched</li>
           
            
        </ul>
        
    </nav>
    )
}