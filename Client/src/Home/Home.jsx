import React from "react";
import Card from "../Card/Card";
import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.container}>
      <h1>Home</h1>
      <Card />
    </div>
  );
}

export default Home;