import React from 'react';
import stands from '../datos';
//import { Link } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function Card() {
  return (
   //  <ImageList sx={{ width: 500, height: 450 }} variant="quilted" cols={4} rowHeight={121}>
   //    {stands.map((stand) => (
   //      <ImageListItem key={stand.id} cols={1} rows={1}>
   //        <img src={stand.image} alt='Imagen de química' />
          
   //      </ImageListItem>
   //    ))}
   //  </ImageList>

   <ImageList
  sx={{ width: 500, height: 450 }}
  variant="quilted"
  cols={4}
  rowHeight={121}
>
  {stands.map((item) => (
    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
     <img
  src={item.img}
  srcSet={`${item.img} 1x, ${item.img2x} 2x`}
  alt={item.title}
  loading="lazy"
/>
    </ImageListItem>
  ))}
</ImageList>
  );
}