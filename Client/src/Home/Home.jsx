import React from "react";
import Card from "../Card/Card";
import style from "./Home.module.css";
import 'animate.css';
import 'atropos/css';
//import Atropos from 'atropos/react';
function Home() {
  return (
    <div className={style.container}>

      <h1>¡¡Bienvenidos a nuestra página	web!! </h1>
      {/* <hr></hr> */}
      {/* <Atropos className="my-atropos"></Atropos> */}
      <div className={style.cards}>
      <Card />
      </div>
    </div>
  );
}

export default Home;