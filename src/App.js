import React from 'react';
import './App.css';
import './components/movie.css'
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Watchlist from './components/wishlist';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>

    
    <div className='page'>
       <Navbar/>
       <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/components/wishlist" element={<Watchlist/>}/>
        
       </Routes>


       
    </div>
    </BrowserRouter>
  );
}

export default App;

