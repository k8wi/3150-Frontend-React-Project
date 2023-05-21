import React from 'react'
import { useState } from "react";
import {genres} from './Genres'
import Movie from './Movie';
import search from '../assets/search.svg'

function handleChange(e)
{
  setMovieList(genres[e.target.value])
  setGenre(e.target.value)
}
function searchMovie(){
  const movieName=document.getElementById("searchInput").value;
  if(movieName){
    const values = Object.values(genres)
  console.log(values[0])
  const tempMovieList = []
  values.forEach(value=>{
    value.forEach(movie => 
      {
        if(movie.title.toLowerCase().indexOf(movieName.toLowerCase())!=-1){
          tempMovieList.push(movie)
        }
      }
    )  
})

setMovieList(tempMovieList)
  }
}

function Search() {
    const [movieList,setMovieList]=useState(genres["Anime"])
    const [genre,setGenre]=useState("Anime")
  return (    
         <div className='search-container'>
          <input type="text" name="" id="searchInput" className='search' placeholder='Search'/> 
          <button className='search-btn' onClick={searchMovie}>
            <img src={search} width="30px " className='search-img'></img>
          </button>
          <select name="Genre" id="genre" className="genre-select"  onChange={handleChange}>
            <option value="">--Genre--</option>
            <option value="Anime">Anime</option>
            <option value="Drama">Drama</option>
            <option value="Hollywood">Hollywood</option>
            <option value="Horror">Horror</option>
        </select>  
         </div>
  )
}

export default Search