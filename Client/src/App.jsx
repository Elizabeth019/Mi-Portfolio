import React from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import Navbar from './NavBar/NavBar';
import LandingPage from './Landing/LandingPage';
import Home from './Home/Home';
//import Detail from './Detail/Detail';
import About from './About/About';

const App = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" && <Navbar />}
    <Routes>
      
      <Route path='/' element={<LandingPage/>}/>
        <Route  path="/inicio" element={<Home/>} />
        {/*<Route path= "/stand/:id" element={<Detail/>} />*/}
         <Route path="/nosotros" element={<About/>} /> 
    </Routes>
    </div>
  );
};

export default App;
