import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='font-mono font-bold text-lg'>
      <BrowserRouter>
      <App/> 
      </BrowserRouter>
    </div>
  </React.StrictMode>,
)
