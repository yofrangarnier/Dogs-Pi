import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDogsId,clean } from "../../redux/action/actions";
import style from "../BreedDetail/BreedDetail.module.css";


const BreedsDetail = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const breedId = useSelector((state) => state.dogsDetail);

  useEffect(() => {
    dispatch(getDogsId(id))
    dispatch(clean());
  }, [dispatch, id]);

  return (
    <div className={style.container}>
      <div>
        <Link to="/home">
        <button>Go Home</button>
        </Link>
        
      </div>
      {breedId.length === 0 ? (
        <div></div>
      ) : (
        <div>
          
          <div className={style.main} key={breedId.id}>
            <img  className={style.img} src={breedId.image} alt="img" width="150" height="150" />
            <h3 className={style.name}>Name: {breedId.name}</h3>
            <div >
              <h4 className={style.p}>Weight:</h4>{" "}
              <p className={style.p}>
                Min: {breedId.min_weight}/kg - Max: {breedId.max_weight}/kg
              </p>
            </div>
            <div>
              <h4 className={style.p}>Height:</h4>{" "}
              <p className={style.p} >
                Min: {breedId.min_height}/cm - Max: {breedId.max_height}/cm
              </p>
            </div>
            <div>
              <h4 className={style.p}>Life-Span:</h4>
              <p className={style.p} > {breedId.life_span} </p>
            </div>
            <div>
              <h4 className={style.p}>Temperaments:</h4>
              <p  className={style.p}>{breedId.temperament}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
export default BreedsDetail;
