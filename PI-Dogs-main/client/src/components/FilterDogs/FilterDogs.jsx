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
        <option value="all Dogs">allDogs</option>
        <option value="dogs of the api">dogs of the api</option>
        <option value="new dogs">new dogs</option>
      </select>
    </div>
  );
};

export default FilterDogs;
