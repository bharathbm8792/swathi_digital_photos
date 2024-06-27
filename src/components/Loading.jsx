import React from "react";
import style from "./Loading.module.css";
import Loading_gif from "/home/bharathbm/practice/React/swathi-digital-photos/src/images/icons/Loading.gif";

export default function Loading() {
  return (
    <div className={style.container}>
      <img src={Loading_gif} alt="Loading..." className={style.loadingImage}/>
      <p className={style.Loading_text}>Loading...</p>
    </div>
  );
}
