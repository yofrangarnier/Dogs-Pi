import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import img from "../../images/dogcreated.png";
import style from "../BreedDetail/BreedDetail.module.css";
import {  getDogsId , clean} from "../../redux/action/actions";

const BreedsDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const allDogs = useSelector((state) => state.dogsDetail);
  useEffect(() => {
    dispatch(getDogsId(id))
    dispatch(clean());
  }, [dispatch, id]);
 

  return (
    <>
   
      <div className={style.container}>
      <Link to="/home">
        <button className={style.button}><b>Go Home</b></button>
        </Link>
        <div className={style.main}>
        {allDogs.length === 0 ? (
        <div></div>
      ) : (
            <article className={style.article}>
              <img
                className={style.img}
                src={allDogs.image ? allDogs.image : img}
                alt={`img-${allDogs.name}`}
              />
              <section className={style.data}>
                <h1 className={style.name}>{allDogs.name}</h1>
                {allDogs.temperament ? (
                  <p className={style.p}>
                    <b>Temperament: </b> {allDogs.temperament}
                  </p>
                ) : (
                  <p className={style.p}>
                    <b>Temperament:</b> not found
                  </p>
                )}
                <p className={style.p}>
                  <b>Min height:</b> {allDogs.min_height} cm
                </p>
                <p className={style.p}>
                  <b>Max height:</b> {allDogs.max_height} cm
                </p>
                <p className={style.p}>
                  <b>Min weight:</b> {allDogs.min_weight} kg
                </p>
                <p className={style.p}>
                  <b>Max weight:</b> {allDogs.max_weight} kg
                </p>
                <p className={style.p}>
                  <b>Life span:</b> {allDogs.life_span}
                </p>
              </section>
            </article>
          
          )}
        </div>
      </div>
    </>
  );
};

export default BreedsDetail;
