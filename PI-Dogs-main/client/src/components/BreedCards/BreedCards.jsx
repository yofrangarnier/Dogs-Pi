import React from "react";
import { Link } from "react-router-dom";
import style from "../BreedCards/BreedCards.module.css"
const BreedCards = (props) => {
  return (
    <div>
      <img className={style.img} src={props.image} alt="img not found"/>
      <Link to={`/home/${props.id}`}>
        <h3> Name: {props.name}</h3>
      </Link>
      
      <div>
      <h4>Temperament: </h4>
      <p>{props.temperament}</p>
      <h5>Weight:  min: {props.min_weight}/ kg - max: {props.max_weight}/ kg </h5>
      </div>
      
    </div>
  );
};

export default BreedCards;
