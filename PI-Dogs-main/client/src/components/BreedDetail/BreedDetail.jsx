import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDogsId } from "../../redux/action/actions";
import style from "../BreedDetail/BreedDetail.module.css";

const BreedsDetail = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const breedId = useSelector((state) => state.dogsDetail);

  useEffect(() => {
    dispatch(getDogsId(id));
  }, [dispatch, id]);

  return (
    <div className={style.detail}>
      <div>
        <Link to="/home">
          <button>Go Home</button>
        </Link>
      </div>
      {breedId.length === 0 ? (
        <div></div>
      ) : (
        <div>
          <div key={breedId.id}>
            <img src={breedId.image} alt="img" width="150" height="150" />
            <h3>Name: {breedId.name}</h3>
            <div>
              <h4>Weight:</h4>{" "}
              <p>
                Min: {breedId.min_weight}/kg - Max: {breedId.max_weight}/kg
              </p>
            </div>
            <div>
              <h4>Height:</h4>{" "}
              <p>
                Min: {breedId.min_height}/cm - Max: {breedId.max_height}/cm
              </p>
            </div>
            <div>
              <h4>Life-Span:</h4>
              <p> {breedId.life_span} </p>
            </div>
            <div>
              <h4>Temperaments:</h4>
              <p>{breedId.temperament}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default BreedsDetail;
