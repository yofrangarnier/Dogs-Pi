import React from "react";
import { Link } from "react-router-dom";
import style from "../BreedCards/BreedCards.module.css";
const BreedCards = (props) => {
  return (
    <>
      <Link className={style.link} to={`/home/${props.id}`}>
        <div className={style.card} key={props.id}>
          <div className={style.content}>
            <div className={style.front}>
              <img
                className={style.img}
                src={props.image}
                alt="img not found"
              />

              <p className={style.subtitle}> Name: {props.name}</p>
            </div>
            <div className={style.back}>
              <h4 className={style.description}>Temperament: </h4>
              <p>{props.temperament}</p>
              <h5 className={style.description2}>
                Weight: min: {props.min_weight}/ kg - max: {props.max_weight}/
                kg{" "}
              </h5>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BreedCards;
