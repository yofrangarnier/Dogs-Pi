import React from "react";
import { useDispatch } from "react-redux";
import { orderBy } from "../../redux/action/actions";
import { WEIGHT_MAX,WEIGHT_MIN } from "../../constante/A-Z";
import style from "../FilterWeight/FilterWeight.module.css"
const FilterWeight = () => {
    const dispatch = useDispatch();

    function onSelectChange(e) {
      dispatch(orderBy(e.target.value));
    }
    return(
        <div className={style.div}>
        <select className={style.select} onChange={onSelectChange}>
          <option defaultValue>Filter By Weight</option>
          <option value={WEIGHT_MAX}>Weight Max</option>
          <option value={WEIGHT_MIN}>Weight Min</option>
        </select>
      </div> 
    )
}

export default FilterWeight