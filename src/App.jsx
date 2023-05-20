import { useState } from 'react'
import Navbar from './components/Navbar';
import Movie from './components/Movie';
import './App.css'
import Hero from './components/Hero';
import creed from './assets/creed.jpeg'
import prey from './assets/prey.jpg'
import moonlight from './assets/moonlight.jpeg'
import tgfh from './assets/tgfh.jpg'
import tar from './assets/tar.png'
import mib from './assets/mib.jpg'
function App() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <div className='movie-container'>
     
       <Movie src={creed} title='Creed' rating='7.6'/>
       <Movie src={prey} title='Prey' rating='6.4'/>
       <Movie src={moonlight} title='Mooonlight' rating='8.2'/>
       <Movie src={tar} title='Tar' rating='4.3'/>
       <Movie src={tgfh} title='This Gun For Hire' rating='9.0'/>
       <Movie src={mib} title='Men In Black' rating='9.6'/>
       <Movie src={creed} title='Creed' rating='7.6'/>
       <Movie src={prey} title='Prey' rating='6.4'/>
       <Movie src={moonlight} title='Mooonlight' rating='8.2'/>
       <Movie src={tar} title='Tar' rating='4.3'/>
       <Movie src={tgfh} title='This Gun For Hire' rating='9.0'/>
       <Movie src={mib} title='Men In Black' rating='9.6'/>
     </div>
    </div>
  )
}


export default App
