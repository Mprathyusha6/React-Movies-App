import React,{useContext} from "react";
import Header from './Header';
import Card from './Card';
import { useState } from "react";
import { MovieContext } from "../App";

export default function Home(){
    const movieInfo=useContext(MovieContext)
    const [Searchvalue,setData] = useState('')
    const SearchBar=()=>{
         const name=document.getElementById('Search').value
          setData(prev=>{
              return name   
          }) 
        }
        console.log('Home')
            console.log(  movieInfo.Contextdata) 
        
    return(
        <div>
            <Header onClick={SearchBar}/>
            <div className="flex">
            <h1>Hello</h1>
            {
            
            movieInfo.Contextdata.filter(function(item){
                    
                return item.Title.toLocaleLowerCase().includes(Searchvalue.toLocaleLowerCase());
             }).map(item=>{
            return <Card key={item.id} {...item}  />
            
        })
             
        
    
            }
            </div>

          
        </div>
    );

}

