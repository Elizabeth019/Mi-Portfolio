import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../modo/ThemeProvider';
import { BiSun, BiMoon } from 'react-icons/bi';

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  const scrollToContact = () => {
      const currentPath = window.location.pathname;
    
      if (currentPath !== '/nosotros') {
        window.location.href = '/nosotros#contacto';
      } else {
        if (contactRef.current) {
          contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '90px',
        backgroundColor: 'rgba(0, 114, 206, 0.9)',
        color: '#fff',
        padding: '10px 0',
        zIndex: 1,
        boxShadow: '0 1px 3px rgba(0,0,0,0.55), 0 1px 2px rgba(0,0,0,0.24)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 20px',
     
        }}
      >
        <Link to="/" style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff', textDecoration: 'none' }}>
          <img src="./asset/image/quimica-removebg-preview.png" alt="logo" style={{ width: '120px' }} />
        </Link>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex' }}>
          <li style={{ marginRight: '20px' }}>
            <Link
              to="/inicio"
              style={{
                textDecoration: 'none',
                color: '#fff',
                transition: 'color 0.3s',
              }}
            >
              Inicio
            </Link>
          </li>
          <li style={{ marginRight: '20px' }}>
            <Link
              to="/nosotros"
              style={{
                textDecoration: 'none',
                color: '#fff',
                transition: 'color 0.3s',
              }}
            >
              Nosotros
            </Link>
          </li>
          <li style={{ marginRight: '20px' }}>
            <Link
              to="/servicios"
              style={{
                textDecoration: 'none',
                color: '#fff',
                transition: 'color 0.3s',
              }}
            >
              Servicios
            </Link>
          </li>
          <li style={{ marginRight: '20px' }}>
            {/* <Link
              to="/nosotros#about-contacto"
              style={{
                textDecoration: 'none',
                color: '#fff',
                transition: 'color 0.3s',
              }}
            >
              Contacto
            </Link> */}
            <a href="#contacto" onClick={scrollToContact} style={{ textDecoration: 'none', color: '#fff', transition: 'color 0.3s' }}>Contacto</a>
          </li>
          <li>
      <button onClick={toggleTheme}>{darkMode ? <BiMoon /> : <BiSun />}</button>
    </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
