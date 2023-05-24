import React from 'react'
import cinema from '../assets/cinema.svg'
function Hero() {
  return (
    <div className="hero">
      <div className='hero-left'>
        <div  className='text'>
        <p>Cineflix Inc. is an American media company based in Los Gatos, California. Founded in 1997 by Reed Hastings and Marc Randolph in Scotts Valley, California, it operates the over-the-top subscription video on-demand service Netflix brand, which includes original films and television series commissioned or acquired by the company, and third-party content licensed from other distributors. Netflix is a member of the Motion Picture Association—having become the first streaming company to become a member.
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