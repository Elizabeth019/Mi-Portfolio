import React from 'react';
import style from './Card.module.css';
import stands from '../datos';
import { Link } from 'react-router-dom';

//import { Link } from '@chakra-ui/react';

export default function Card() {
   // const onClick = () => {
      
   // }
    return (
   //      <div className={style.central}>
      <div className={style.general}>
{stands.map((stand) => {
   return (
      <div key={stand.id} className={style.container}>
         <h4>{stand.title}</h4>
        <Link to={`/stand/${stand.id}`}>
        <img src={stand.image} alt='Imagen de química' />
         </Link>
         </div>
)})}

         {/* <h4>quimica</h4>
        
         <img src="../../asset/image/fotos-quimica-stands/IMG-20230815-WA0137.jpg" alt='Imagen de química' /> */}
{/* </div>
<div className={style.container}>
         <h4>quimica</h4>
        
         <img src="../../asset/image/fotos-quimica-stands/IMG-20230815-WA0004.jpg" alt='Imagen de química' /> */}
      </div>
      // </div>
   );
}
