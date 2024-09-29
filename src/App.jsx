import React from 'react'
import Navbar from './componet/Navbar'
import Home from './componet/Home'
import About from './componet/About'
import Portfolio from './componet/Portfolio'
import Experiance from './componet/Experiance'
import Footer from './componet/Footer'
import Contact from './componet/Contact'
import { Toaster } from 'react-hot-toast'




export default function App() {
  return (
    <>
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Experiance/>
    <Contact/>
    <Footer/>

    </div>
    <Toaster />

    
    

    
    
    </>
  )
}
