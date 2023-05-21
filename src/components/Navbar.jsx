import { Outlet, Link } from "react-router-dom";
import Search from "./Search";
const Navbar = () => {
    return (
      <>
      <nav>
        <div className='navhead'>
          <h1 className="text-2xl">CINEFLIX</h1>
  
        </div>
          
        <Search/>

        <div className='links'>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/tvseries">TV Series</Link>
          <Link to="/about">About</Link>
          
        </div>
      </nav>
      <Outlet/>
      </>
    )
  }

export default Navbar