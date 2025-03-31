 import React from 'react'
//  import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import "./style.css";
import "./App.css";
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
 