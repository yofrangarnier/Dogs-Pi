import React from "react";
import style from "../Button/Button.module.css";

const Button = ({ text, onClick, type }) => {
  return (
    <>
      <button className={style.button} type={type} onClick={onClick}>
        <span>{text}</span>
      </button>
    </>
  );
};

export default Button;