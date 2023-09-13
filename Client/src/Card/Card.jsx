import React from 'react';
import style from './Card.module.css';

export default function Card() {
   return (
        <div className={style.central}>
      <div className={style.container}>
         <h4>quimica</h4>
         {/* Corrige la ruta de la imagen y el atributo alt */}
         <img src="../../asset/image/fotos-quimica-stands/IMG-20230815-WA0137.jpg" alt='Imagen de química' />
</div>
<div className={style.container}>
         <h4>quimica</h4>
         {/* Corrige la ruta de la imagen y el atributo alt */}
         <img src="../../asset/image/fotos-quimica-stands/IMG-20230815-WA0137.jpg" alt='Imagen de química' />
      </div>
      </div>
   );
}
