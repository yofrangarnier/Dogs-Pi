import React from "react";
import { useDispatch } from "react-redux";
import { filterWeight } from "../../redux/action/actions";
import { WEIGHT_MAX,WEIGHT_MIN } from "../../constante/A-Z";
import style from "../FilterWeight/FilterWeight.module.css"
const FilterWeight = () => {
    const dispatch = useDispatch();

    function onSelectChange(e) {
      e.preventDefault()
      dispatch(filterWeight(e.target.value));
    }
    return(
        <div className={style.div}>
        <select className={style.select} onChange={(e)=>onSelectChange(e)}>
          <option value ="all">Filter By Weight</option>
          <option value={WEIGHT_MAX}>Weight Max</option>
          <option value={WEIGHT_MIN}>Weight Min</option>
        </select>
      </div> 
    )
}

export default FilterWeight