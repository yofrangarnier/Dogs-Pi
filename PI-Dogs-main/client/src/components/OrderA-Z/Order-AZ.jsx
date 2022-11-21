import React from "react";
import { orderBy } from "../../redux/action/actions";
import { useDispatch } from "react-redux";
import { A_Z, Z_A } from "../../constante/A-Z";
import style from "../OrderA-Z/OrderA-Z.module.css";
import SearchBar from "../SeachBar/SearchBar";
const Order = () => {
  const dispatch = useDispatch();

  function onSelectChange(e) {
    dispatch(orderBy(e.target.value));
  }

  return (
    <div className={style.div}>
      <select className={style.select} onChange={onSelectChange}>
        <option defaultValue>Filter By Order</option>
        <option value={A_Z}>Order A - Z</option>
        <option value={Z_A}>Order Z - A</option>
      </select>

      <SearchBar />
      <div className={style.div2}>
        <button onClick={() => window.location.reload()}>Refresh Dogs</button>
      </div>
    </div>
  );
};
export default Order;
