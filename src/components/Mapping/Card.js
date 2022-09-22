import React from "react";
import classes from "./Card.module.css";

function Card({ programming, library }) {
  return (
    <div className={classes.card}>
      <h2>{programming}</h2>
      <h3>{library}</h3>
    </div>
  );
}

export default Card;
