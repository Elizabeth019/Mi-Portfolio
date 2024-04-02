import React from "react";
import Card from "../Card/Card";
import style from "./Home.module.css";
import 'animate.css';
function Home() {
  return (
    < div className={style.container}>
      {/* <hr></hr> */}
      <h1 className={style.title}>¡¡Bienvenidos a nuestra página	web!! </h1>
     
      <div className={style.cards}>
      <Card />
      </div>
    </div>
  );
}

export default Home;