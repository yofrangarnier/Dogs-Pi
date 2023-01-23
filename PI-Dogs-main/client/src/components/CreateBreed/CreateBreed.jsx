import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDogs, getAllDogs, getAllTemperament } from "../../redux/action/actions";
import {Link} from "react-router-dom"
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import DoubleInput from "../DoubleInput/DoubleInput";
import SelectTemperaments from "../SelectTemperament/SelectTemperament";
import style from "../CreateBreed/CreateBreed.module.css";
import img from "../../images/dogcreated.png"

const CreateBreed = () => {
  const dispatch = useDispatch();
  const temperament = useSelector((state) => state.temperaments);
  const dogs = useSelector((state) => state.dogs);
  const dogsName = dogs.map((d) => d.name);


  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getAllTemperament());
  }, [dispatch]);

  const [name, setName] = useState("");
  const [height, setHeight] = useState({
    min: "",
    max: "",
  });
  const [weight, setWeight] = useState({
    min: "",
    max: "",
  });
  const [life_span, setLifeSpan] = useState({
    life_span:""
  });
  const [image, setImage] = useState("");
  const [tempsSelected, setTempsSelected] = useState([]);
  const [modal, setModal] = useState({
    text: "",
    error: false,
    success: false,
  }); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) return;
    const finalLifeSpan = `${life_span.min} - ${life_span.max} years`;
    const dataDog = {
      name,
      min_height: height.min,
      max_height: height.max,
      min_weight: weight.min,
      max_weight: weight.max,
      image: image ? image : img,
      life_span: finalLifeSpan,
      temperament: tempsSelected,
    };
    const res = dispatch(createDogs(dataDog));
    if (res.error) {
      return setModal({
        text: res.error,
        error: true,
        success: false,
      });
    } else {
      return (
        setModal({
          text: "Dog successfully created!",
          error: false,
          success: true,
        }),
        setName(""),
        setHeight({ min: "", max: "" }),
        setWeight({ min: "", max: "" }),
        setLifeSpan({min: "", max: ""}),
        setImage(""),
        setTempsSelected([])
        
      );
      
    }
    
  };
  
  const handleAdd = (e) => {
    if (tempsSelected.length > 5 ) {
      return setModal({
        text: "You can't select more than 6 temperaments",
        error: true,
        success: false,
      });
    }else if (tempsSelected.includes(e.target.value)){
      return setModal({
        text: "this temperament is ready",
        error: true,
        success: false,
      });
    }
     setTempsSelected([...tempsSelected, e.target.value])
  };

  const handleRemove = (e) => {
    setTempsSelected(tempsSelected.filter((t) => t !== e.target.id));
  };

  const onClose = () => {
    setModal({
      text: "",
      error: false,
      success: false,
    });
  };

  const validate = () => {
    if (!name) {
      setModal({
        text: "Name is required",
        error: true,
        success: false,
      });
      return true;
    }
    if (!name.match(/^[A-Za-z]+$/)) {
      setModal({
        text: "Name must contain only letters",
        error: true,
        success: false,
      });
      return true;
    }
    if (!name.match(/^[A-Z][a-z]+$/)) {
      setModal({
        text: "Name must start with a capital letter",
        error: true,
        success: false,
      });
      return true;
    }
    if (dogsName.includes(name)) {
      setModal({
        text: `The name ${name} already exists`,
        error: true,
        success: false,
      });
      return true;
    }

    if (parseFloat(height.min) === 0 || parseFloat(height.max) === 0) {
      setModal({
        text: "The height can't be 0",
        error: true,
        success: false,
      });
      return true;
    }
    if (parseFloat(height.min) > parseFloat(height.max)) {
      setModal({
        text: "The min height can't be greater than the max height",
        error: true,
        success: false,
      });
      return true;
    }

    if (parseFloat(weight.min) === 0 || parseFloat(weight.max) === 0) {
      setModal({
        text: "The weight can't be 0",
        error: true,
        success: false,
      });
      return true;
    }
    if (parseFloat(weight.min) > parseFloat(weight.max)) {
      setModal({
        text: "The min weight can't be greater than the max weight",
        error: true,
        success: false,
      });
      return true;
    }

    if (parseFloat(life_span.min) === 0 || parseFloat(life_span.max) === 0 ) {
      setModal({
        text: "The life span can't be 0",
        error: true,
        success: false,
      });
      return true;
    }
    if (parseFloat(life_span.min) > parseFloat(life_span.max)) {
      setModal({
        text: "The min life span can't be greater than the max life span",
        error: true,
        success: false,
      });
      return true;
    }

    if (tempsSelected.length === 0) {
      setModal({
        text: "You must select at least one temperament",
        error: true,
        success: false,
      });
      return true;
    }
    return false;
  };

  return (
    <>
      <div className={style.container}>
        {(modal.error || modal.success) && (
          <Modal modal={modal} onClose={onClose} />
        )}
        <div className={style.main}>
          <section className={style.section}>
            <h1 className={style.title}>CREATE YOUR DOG</h1>
            <form onSubmit={handleSubmit} className={style.form}>
              <div className={style.subtitle}>
                <label>Name: </label>
                <input
                  className={style.input}
                  type="text"
                  name="name"
                  placeholder="Name..."
                  value={name}
                  autoComplete={"off"}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={style.subtitle}>
                <DoubleInput
                  label="Height"
                  value={height}
                  setState={setHeight}
                />
              </div>
              <div className={style.subtitle}>
                <DoubleInput
                  label="Weight"
                  value={weight}
                  setState={setWeight}
                />
              </div>
              <div className={style.subtitle}>
                <DoubleInput
                  label="Life span"
                  value={life_span}
                  setState={setLifeSpan}
                />
              </div>
              <div className={style.subtitle}>
                <label>Image: </label>
                <input
                  className={style.input}
                  type="text"
                  name="image"
                  placeholder="Url..."
                  value={image}
                  autoComplete={"off"}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div className={style.subtitle}>
                <SelectTemperaments
                  temperament={temperament}
                  tempsSelected={tempsSelected}
                  handleAdd={handleAdd}
                  handleRemove={handleRemove}
                />
              </div>
              <div className={style.button_div}>
                <Button type={"submit"} text={"CREATE"}  />
                <Link to="/home">
                <button className={style.button}> <b>Go Home</b></button>
                </Link>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default CreateBreed;

