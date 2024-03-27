import React, { createContext, useState, useContext } from 'react';

// Paso 1: Definir los estilos
const darkStyles = {
  backgroundColor: '#333',
  color: '#fff',
};

const lightStyles = {
  backgroundColor: '#fff',
  color: '#333',
};

// Paso 2: Crear el contexto del tema
export const ThemeContext = createContext();

// Paso 3: Componente proveedor del tema
const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Función para cambiar el tema
  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // Aplicar estilos según el tema seleccionado
  const themeStyles = darkMode ? darkStyles : lightStyles;

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div style={themeStyles}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Hook personalizado para acceder al contexto del tema
export const useTheme = () => {
  return useContext(ThemeContext);
};

export default ThemeProvider;
