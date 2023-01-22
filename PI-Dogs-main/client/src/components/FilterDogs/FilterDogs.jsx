import React from "react";
import { useDispatch } from "react-redux";
import { filterDogs } from "../../redux/action/actions";
import style from "../FilterDogs/FilterDogs.module.css"
const FilterDogs = () => {
  const dispatch = useDispatch();

  const onFilterDogs = (e) => {
    e.preventDefault();
    dispatch(filterDogs(e.target.value));
  };
  return (
    <div className={style.div}>
      <select className={style.select} onClick={onFilterDogs}>
        <option value="all Dogs">AllDogs</option>
        <option value="dogs of the api">Dogs of the api</option>
        <option value="new dogs">New dogs</option>
      </select>
    </div>
  );
};

export default FilterDogs;
