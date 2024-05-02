import React, { useState } from 'react';
import style from './Image.module.css';
import { useDropzone } from 'react-dropzone';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export default function ImageForm() {
  const [images, setImages] = useState([]);

  const onDrop = (acceptedFiles) => {
    const newImages = acceptedFiles.map((file) => Object.assign(file, {
      preview: URL.createObjectURL(file),
    }));
    setImages([...images, ...newImages]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleDrop = (images) => {
    event.preventDefault();
    // Lógica para enviar las imágenes al servidor
    const upLoards = images.map((image) => {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("tags", `codeinfuse, medium, gist`);
      formData.append("upload_preset", "stand");
    })
  }

  return (
    <div className={style.container}>
      <h1>Nuevo Stands</h1>
      <div className={style.dropzone}>
      <div >
        {images.map((image, index) => (
          <img key={index} src={image.preview} alt={`Imagen ${index}`} />
        ))}
      </div>
      <section>
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <span><AddPhotoAlternateIcon /></span>
          <p>Coloca tus imágenes aquí</p>
        </div>
      </section>
      <button type="submit">Publicar</button>
      </div>
    </div>
  );
}
