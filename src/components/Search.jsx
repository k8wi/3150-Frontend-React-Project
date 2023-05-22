import React from 'react'
import { useState } from "react";
import {genres} from './Genres'
import Movie from './Movie';
import search from '../assets/search.svg'
import SearchPage from '../SearchPage';
import Navbar from './Navbar.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

setMovieList(tempMovieList);
  }
}

function route(){
  return( 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
         <Route index element={<SearchPage />} />
      </Route>
    </Routes>
  </BrowserRouter>  
);
}

function Search() {
    const [movieList,setMovieList]=useState(genres["Anime"])
    const [genre,setGenre]=useState("Anime")
  return (    
    <div className='sp'>
        <form onSubmit={route} > 
        <div className='s'>
         <div className='search-container'>
          <input type="text" name="" id="searchInput" className='search' placeholder='Search'/> 
          <button type="submit" className='search-btn' onClick={searchMovie}>
            <img src={search} width="30px " className='search-img'></img>
          </button>
          <div className='select'>
            <select name="Genre" id="genre" className="genre-select"  onChange={handleChange}>
              <option value="">--Genre--</option>
              <option value="Anime">Anime</option>
              <option value="Drama">Drama</option>
              <option value="Hollywood">Hollywood</option>
              <option value="Horror">Horror</option>
            </select>  
            </div>
        </div>     
        </div>
        </form>


        <div className='display'>
         {/*<h1 className='genre'>{genre}</h1>*/}
         {
          movieList.length != 0 && movieList.map(item => {
            return <Movie key={item.id} src={item.image} title={item.title} rating={item.rating} />
          })
        }
        {
          movieList.length == 0 && <MovieNotFound />
        }
        </div>
        </div>  
  )
}

export default Search