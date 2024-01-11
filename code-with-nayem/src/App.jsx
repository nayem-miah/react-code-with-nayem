import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import Features from './components/Features'
import Cta from './components/Cta'
import Portfolio from './components/Portfolio'
import Team from './components/team'
import Contact from './components/Contact'
import Blog from './components/Blog'

import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>



    <BrowserRouter>
       <Routes>
        
          <Route path='/' element={<Hero/>}></Route>
          <Route path='/about' element={<About/>}> </Route>
          <Route path='/service' element={<Service/>}> </Route>
          <Route path='/features' element={<Features/>}> </Route>
          <Route path='/cta' element={<Cta/>}> </Route>
          <Route path='/portfolio' element={<Portfolio/>}> </Route>
          <Route path='/team' element={<Team/>}> </Route>
          <Route path='/contact' element={<Contact/>}> </Route>
          <Route path='/blog' element={<Blog/>}> </Route>
          
       </Routes>
    </BrowserRouter>

    </>
  )



}

export default App
