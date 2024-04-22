import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './NavBar/NavBar';
import LandingPage from './Landing/LandingPage';
import Home from './Home/Home';
import About from './About/About';
import Contacto from './Contacto/contacto';
import Form from './Image_Form/image_form';
import Servicios from './Servicios/Servicios';

const App = () => {
  const location = useLocation();

  return (
    
    <>

      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/inicio' element={<Home />} />
        {/*<Route path="/stand/:id" element={<Detail/>} />*/}
        <Route path="/servicios" element={<Servicios/>} />
        <Route path='/nosotros' element={<About />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/form' element={<Form />} />
      </Routes>
   
    </>
  );
};

export default App;
