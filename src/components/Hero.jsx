import React from 'react'
import cinema from '../assets/cinema.svg'
function Hero() {
  return (
    <div className="hero">
      <div className='hero-left'>
        <div  className='text'>
        <p>Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor
           incididunt ut labore et dolore magna aliqua. 
           Ut enim ad minim veniam, quis nostrud exercitation
           ullamco laboris nisi ut aliquip ex ea commodo 
           consequat. Duis aute irure dolor in reprehenderit 
           in voluptate velit esse cillum dolore eu fugiat 
           nulla pariatur. Excepteur sint occaecat cupidatat 
           non proident, sunt in culpa qui officia deserunt 
           mollit anim id est laborum.
            </p>
          </div>
      </div>
      <div className='hero-right'>
        <img src={cinema}/>
      </div>
       
    </div>
  )
}

export default Hero