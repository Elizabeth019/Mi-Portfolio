import React from "react";
import style from "./LandingPage.module.css";
import { Link } from "react-router-dom";
import Atropos from 'atropos/react';
export default function LandingPage() {
  return (
    <div className={style.container}>
      <img src="./asset/image/quimica-removebg-preview.png" alt="logo" className={style.logo}/>
      <h1>Landing Page</h1>
      <Atropos
        activeOffset={40}
        shadowScale={1.05}
        onEnter={() => console.log('Enter')}
        onLeave={() => console.log('Leave')}
        onRotate={(x, y) => console.log('Rotate', x, y)}
      >
      <img src="./asset/image/un taller con h 0.png" alt="logo" />
<Link to="/inicio" className={style.btn}>Ingresar</Link>
    </Atropos>
    </div>
  )};
