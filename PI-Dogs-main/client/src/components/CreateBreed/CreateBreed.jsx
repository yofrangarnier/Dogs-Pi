import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { createDogs, getAllTemperament } from "../../redux/action/actions";
import style from "../CreateBreed/CreateBreed.module.css";
const CreateBreed = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const temperamentAll = useSelector((state) => state.temperaments);
  const [error, setError] = useState({});
  const [create, setCreate] = useState({
    name: "",
    min_height: "",
    max_height: "",
    min_weight: "",
    max_weight: "",
    life_span: "",
    temperament: [],
    image: "",
  });
  const handleInput = (e) => {
    setCreate({
      ...create,
      [e.target.name]: e.target.value,
    });
    setError(
      validation({
        [e.target.name]: e.target.value,
      })
    );
  };
  const handleSelect = (e) => {
    !create.temperament.includes(e.target.value)
      ? setCreate({
          ...create,
          temperament: [...create.temperament, e.target.value],
        })
      : alert("the temperament already exists");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createDogs(create));
    alert("Your Dog Has Been Successfully Created");
    setCreate({
      name: "",
      min_height: "",
      max_height: "",
      min_weight: "",
      max_weight: "",
      life_span: "",
      temperament: [],
      image: "",
    });
    history.push("/home");
  };

  useEffect(() => {
    dispatch(getAllTemperament());
  }, [dispatch]);
  function handleDelete(e) {
    setCreate({
      ...create,
      temperament: create.temperament.filter((temp) => temp !== e),
    });
  }
  const validation = (create) => {
    let error = {};
    let onlyName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let onlyNumbers = /^[0-9]\d*(\.\d+)?$/;

    if (!create.name) {
      error.name = "The Name field is required";
    } else if (!onlyName.test(create.name)) {
      error.name = "The 'Name' field only accepts letters and whitespace";
    }
    if (!create.min_height) {
      error.min_height = "Field Required";
    } else if (!onlyNumbers.test(create.min_height.trim())) {
      error.min_height = "Only Numbers";
    } else if (create.min_height < 10) {
      error.min_height =
        "The average minimum height should not be less than 10 cm";
    } else if (create.min_height > 120) {
      error.min_height =
        "The average minimum height must not be higher than 120 cm";
    }

    if (!create.max_height) {
      error.max_height = "Field Required";
    } else if (!onlyNumbers.test(create.max_height.trim())) {
      error.heightMax = "Only Numbers";
    } else if (parseInt(create.max_height) <= parseInt(create.min_height)) {
      error.max_height = "The maximum height must be greater than the minimum";
    } else if (create.max_height > 130) {
      error.max_height = "The maximum height cannot be higher than 130 cm";
    }

    if (!create.min_weight) {
      error.min_weight = "Field Required";
    } else if (!onlyNumbers.test(create.min_weight.trim())) {
      error.min_weight = "Only Numbers";
    } else if (create.min_weight > 1) {
      error.min_weight = "The minimum weight must not be less than 1 kg";
    } else if (create.min_weight > 6) {
      error.min_weight = "The minimum weight cannot exceed 60 kg";
    }

    if (!create.max_weight) {
      error.max_weight = "Field Required";
    } else if (!onlyNumbers.test(create.max_weight.trim())) {
      error.max_weight = "Only Numbers";
    } else if (parseInt(create.max_weight) <= parseInt(create.min_weight)) {
      error.max_weight =
        "The maximum weight must be higher than the minimum weight";
    } else if (create.max_weight > 150) {
      error.max_weight = "The maximum weight should not be more than 150 kg";
    }
    if (!create.life_span) {
      error.life_span = "Field Required";
    } else if (!onlyNumbers.test(create.life_span.trim())) {
      error.life_span = "Only Numbers";
    } else if (create.life_span < 10) {
      error.life_span = "Life expectancy cannot be less than 10 years";
    } else if (create.life_span > 13) {
      error.life_span = "Life expectancy cannot be greater than 13 years";
    } else if (create.temperament.lengt === 0) {
      error.temperament = "A minimum temperament is required";
    }

    return error;
  };
  return (
    <div className={style.signupcontainer}>
      <form className={style.formcontainer} onSubmit={handleSubmit}>
      <h2 className={style.h2}>Welcome Dogs Happy</h2>
        <h3 className={style.h3}>Create Your Dog</h3>
          <label>Name: </label>
          <input
            type="text"
            value={create.name}
            name="name"
            onChange={handleInput}
            placeholder="Name Dog"
            required="true"
            className={style.input}
          />
          {error.name ? ( <p className={style.error}>{error.name}</p>) : null}
        
      
          <label>min_height: </label>
          <input
            type="text"
            value={create.min_height}
            name="min_height"
            onChange={handleInput}
            maxLength={3}
            placeholder="Height Min"
            required="true"
            className={style.input}
          />
          {error.min_height ? ( <p className={style.error}>{error.min_height}</p>) : null}
        
       
          <label>max_height: </label>
          <input
            type="text"
            value={create.max_height}
            name="max_height"
            onChange={handleInput}
            placeholder="Height Max"
            maxLength={3}
            required="true"
            className={style.input}
          />
          {error.max_height ? ( <p className={style.error}>{error.max_height}</p>) : null}
        
        
          <label>min_weight: </label>
          <input
            type="text"
            value={create.min_weight}
            name="min_weight"
            onChange={handleInput}
            placeholder="Weight Min"
            maxLength={2}
            required="true"
            className={style.input}
          />
          {error.min_weight ? ( <p className={style.error}>{error.min_weight}</p>) : null}
        
        
          <label>max_weight: </label>
          <input
            type="text"
            value={create.max_weight}
            name="max_weight"
            onChange={handleInput}
            placeholder="Weght Max"
            maxLength={3}
            required="true"
            className={style.input}
          />
          {error.max_weight ? ( <p className={style.error}>{error.max_weight}</p>) : null}
        
       
          <label>life_span: </label>
          <input
            type="text"
            value={create.life_span}
            name="life_span"
            onChange={handleInput}
            placeholder="Life Span"
            maxLength={2}
            required="true"
            className={style.input}
          />
          {error.life_span ? ( <p className={style.error}>{error.life_span}</p> ) : null}
        
        
          <label>image: </label>
          <input
            type="text"
            value={create.image}
            name="image"
            onChange={handleInput}
            placeholder="Img - Url"
            className={style.input}
          />
          {error.image ? ( <p className={style.error}>{error.image}</p> ) : null}
        
        
          <label>temperament: </label>
          
            <select className={style.input} onChange={handleSelect}>
              {temperamentAll.map((e) => (
                <option  value={e.name}>{e.name}</option>
              ))}
            </select>
         
          {error.temperament ? ( <p className={style.error}>{error.temperament}</p>) : null}
       
        <div>
          {create.temperament.map((e) => (
            <div key={e}>
              {e}
              <button className={style.btnes} type="button" onClick={() => handleDelete(e)}>
              🗑️
              </button>
            </div>
          ))}
        </div>
        <ul>
          <li>{create.temperament.map((e) => e + " , ")}</li>
        </ul>
        <button className={style.btn} type="submit">
          Create Dogs
        </button>
        <Link to="/home">
          <button className={style.btn}>Back Home</button>
        </Link>
      </form>
    </div>
  );
};
export default CreateBreed;
