import React from "react";
import { orderBy } from "../../redux/action/actions";
import { useDispatch } from "react-redux";
import { A_Z, Z_A, WEIGHT_MAX, WEIGHT_MIN } from "../../constante/A-Z";
import style from "../OrderA-Z/OrderA-Z.module.css";

const Order = () => {
  const dispatch = useDispatch();

  function onSelectChange(e) {
    e.preventDefault()
    dispatch(orderBy(e.target.value));
  }

  return (
    <div className={style.div}>
      <select className={style.select} onChange={(e)=>onSelectChange(e)}>
        <option value= "all" >Filter By Order</option>
        <option value={A_Z}>Order A - Z</option>
        <option value={Z_A}>Order Z - A</option>
        <option value={WEIGHT_MAX}>Weight Max</option>
        <option value={WEIGHT_MIN}>Weight Min</option>
      </select>
    </div>
  );
};
export default Order;
