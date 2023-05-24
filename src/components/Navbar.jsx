import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";



const Navbar = () => {
  const [login,setLogin]=useState("Log-in")
  const [changeColor,setChangeColor]=useState(false)
  const handleClick=()=>{
   
      setLogin("User1");
      setChangeColor(!changeColor);
    }
    return (
      <>
      <nav>
        <div className='navhead'>
          <h1 className="text-2xl">CINEFLIX</h1>
  
        </div>
          
        

        <div className='links'>
       
          <h2 className="hover:animate-bounce"><Link to="/">Home</Link></h2>
          <h2 className="hover:animate-bounce"><Link to="/search">Search</Link></h2>
          <h2 className="hover:animate-bounce"><Link to="/list">Watchlist</Link></h2>
          
          
        </div>
        <div>
          <button>
            <Link to="/login">{login}</Link>
           </button>
       
        </div>
      </nav>
      <Outlet/>
      </>
    )
  }

export default Navbar