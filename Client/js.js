import React, { useState } from 'react';
import './Gallery.css'; // Asegúrate de importar tus estilos CSS

function Gallery() {
  const [activeButton, setActiveButton] = useState('all'); // Estado para el botón activo
  const [galleryImages, setGalleryImages] = useState([...]); // Define tu arreglo de imágenes aquí

  // Manejador de clics en los botones
  const handleButtonClick = (filter) => {
    setActiveButton(filter);

    if (filter === 'all') {
      // Mostrar todas las imágenes
      // Puedes implementar tu lógica para mostrar todas las imágenes aquí
    } else {
      // Filtrar y mostrar las imágenes según el filtro
      const filteredImages = galleryImages.filter((image) => image.filter === filter);
      setGalleryImages(filteredImages);
    }
  };

  // MAGNIFIC-POPUP no tiene una versión de React directa, por lo que puedes usar una librería externa o un componente de modal personalizado

  return (
    <div className="gallery">
      <div className="button" onClick={() => handleButtonClick('all')} className={activeButton === 'all' ? 'active' : ''}>
        All
      </div>
      {/* Agrega más botones de filtro aquí */}
      {galleryImages.map((image) => (
        <div key={image.id} className={`image ${image.filter}`}>
          {/* Renderiza tus imágenes aquí */}
        </div>
      ))}
    </div>
  );
}

export default Gallery;
