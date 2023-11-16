import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contact from "./components/Contact";
import Works from "./components/Works";
import About from "./components/About";




const App = () => {
    return (
      <>
        <Router>
         <Navbar/>
          <Routes>
            <Route path='/' element  = {<Home/>} exact>
              </Route>

            <Route path='/about' element = {<About/> } exact> 
            </Route>
            <Route path='/works' element = {<Works/>} exact>
                </Route>

            <Route path='/contact' element = {<Contact/>} exact>
                </Route>
                
          </Routes>
        </Router>
        
      </>
    )
}

export default App


