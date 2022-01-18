import React from "react";
import Header from './Header';
import Card from './Card';
import { useState } from "react";
import movieInfo from "./movieData";

export default function Home(){
    const {data,setData} = useState({movieInfo})
    // console.log(movieInfo);
    // const ContactElements = MovieData.map(item => {
    //     return <Card 
    //     key={item.id}
    //     {...item}
    //     />
    // })
    // function handleOnchange(e) {
    //     setTimeout(function() { //Start the timer
            
    //     setData(prev => {
    //         return {
    //             ...prev,
    //             status: e.target.value
    //         }
    //     })//After 1 second, set render to true
    //     }.bind(this), 500)
    
    // }

    return(
        <div>
            <Header/>
            <div className="flex">
            {
                movieInfo.map(item=>{
                    return <Card key={item.id} {...item} />
                    
                })
                
    
            }
            </div>

          
        </div>
    );

}