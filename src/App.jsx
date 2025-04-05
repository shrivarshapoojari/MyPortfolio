import React from 'react'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import './index.css'
import './style.css'
import './style2.css'
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/Navbar'
import About from './components/About/About'
import Footer from './components/Footer'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact'
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "../src/components/Pre";
import { useEffect } from 'react'
 const App = () => {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
   return (
      <BrowserRouter>
       <Preloader load={load} />
       <div className="App" id={load ? "no-scroll" : "scroll"}>
      <NavBar/>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element= {<Projects/>}/>
          <Route path="/contact" element= {<Contact/>}/>
        </Routes>
        <Footer/>
        </div>
      </BrowserRouter>
   )
 }
 
 export default App
 