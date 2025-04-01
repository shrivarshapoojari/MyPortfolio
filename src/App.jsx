import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import './index.css'
import './style.css'
import './style2.css'
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/Navbar'
import About from './components/About/About'
 const App = () => {
   return (
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
   )
 }
 
 export default App
 