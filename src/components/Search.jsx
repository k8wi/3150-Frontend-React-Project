import React from 'react'
import { useState } from "react";
import {genres} from './Genres'
import Movie from './Movie';
import search from '../assets/search.svg'
import SearchPage from '../SearchPage';
import Navbar from './Navbar.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieNotFound from "./MovieNotFound";


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

function Search(props) {
  const addedList = props.addedList
  const setAddedList = props.setAddedList
  const getAllMovies = () => {
    const movieArr = Object.values(genres).map(item=>{
      return item.map(movie=>movie
       )
     }
     )
    return movieArr.flat()
  }
    const [movieList,setMovieList]=useState(getAllMovies())
    const [genre,setGenre]=useState("")
    function handleChange(e){
      setMovieList(genres[e.target.value])
      setGenre(e.target.value)
      console.log(genres[e.target.value])
    } 
    function searchMovie(){
      const movieName=document.getElementById("searchInput").value;
      if(movieName){
        const values = Object.values(genres)
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
  return (    
    <div className='sp'>
        {/* <form onSubmit={route} >  */}
        <div className='s'>
         <div className='search-container'>
          <input type="text" name="" id="searchInput" className='search' placeholder='Search'/> 
          <button type="submit" className='search-btn' onClick={searchMovie}>
            <img src={search} width="30px " className='search-img'></img>
          </button>
          <div className='select'>
            <select name="Genre" id="genre" className="genre-select"  onChange={handleChange}>
              <option value="" disabled selected>--Genre--</option>
              <option value="ACTION">ACTION</option>
              <option value="SCI-FI">SCI-FI</option>
              <option value="THRILLER">THRILLER</option>
              <option value="HORROR">HORROR</option>
              <option value="ANIME">ANIME</option>
            </select>  
            </div>
        </div>     
        </div>
        {/* </form> */}
        <div className='display'>
         {/*<h1 className='genre'>{genre}</h1>*/}
         <div className='movie-container'>
         {
          
          movieList.length != 0 && movieList.map(item => {
            return <Movie key={item.id} id={item.id} src={item.image} title={item.title} rating={item.rating}
                        addedList={addedList} setAddedList={setAddedList}
                        />
                      
          })
        } 
        </div>
        
       
        </div>
        {
          movieList.length == 0 && <MovieNotFound />
        }
        </div>  
        
  )
}

export default Search