import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./Home";
import Search from "./components/Search";
import MoviePage from './MoviePage';
import List from "./components/List"
import {genres} from "./components/Genres"
import Login from "./Login";
const getAllMovies = () => {
  const movieArr = Object.values(genres).map(item=>{
    return item.map(movie=>movie
     )
   }
   )
  return movieArr.flat()
}

function App(){
  const [addedList, setAddedList] = useState({})
  return(
    <>
    <Navbar/>
    <Routes>
          <Route path="/" element={<Home addedList={addedList} setAddedList={setAddedList}/>}/>
          <Route path="search" element={<Search addedList={addedList} setAddedList={setAddedList}/>}/>
          <Route path="list" element={<List addedList={addedList} setAddedList={setAddedList}/>}/>
          <Route path="login" element={<Login/>}/>
      </Routes>
    </>
    
  )
}

export default App