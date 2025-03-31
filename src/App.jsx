import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import './index.css'
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css";
 const App = () => {
   return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          
        </Routes>
      </BrowserRouter>
   )
 }
 
 export default App
 