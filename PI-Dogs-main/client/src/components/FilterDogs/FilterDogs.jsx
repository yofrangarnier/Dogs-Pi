import React from "react";
import { useDispatch } from "react-redux";
import { filterDogs } from "../../redux/action/actions";

const FilterDogs = () => {
  const dispatch = useDispatch();

  const onFilterDogs = (e) => {
    e.preventDefault();
    dispatch(filterDogs(e.target.value));
  };
  return (
    <div>
      <select onClick={onFilterDogs}>
        <option value="all Dogs">allDogs</option>
        <option value="dogs of the api">dogs of the api</option>
        <option value="new dogs">new dogs</option>
      </select>
    </div>
  );
};

export default FilterDogs;
