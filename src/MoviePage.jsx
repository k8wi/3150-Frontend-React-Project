import React from 'react'
import { genres } from './components/Genres'
import Movie from './components/Movie'
import './App.css'

function MoviePage(props) {
  const addedList = props.addedList
  const setAddedList = props.setAddedList
  return (<div className='movie-container' >{
    genres.ACTION.map(item=>{
      return (<Movie key={item.id} 
                    id={item.id} 
                    src={item.image} 
                    title={item.title} 
                    rating={item.rating}
                    addedList={addedList} 
                    setAddedList={setAddedList}/>
                    )
    })
  }</div>)
}

export default MoviePage