import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Navbar from './NavBar/NavBar';
import Home from './Home/Home';
//import About from './About/About';

const App = () => {
  return (
    <div>
    <Navbar />
    <Routes>
      
        <Route  path="/" element={<Home/>} />
        
        {/* <Route path="/about" component={About} /> */}
      
    </Routes>
    </div>
  );
};

export default App;
