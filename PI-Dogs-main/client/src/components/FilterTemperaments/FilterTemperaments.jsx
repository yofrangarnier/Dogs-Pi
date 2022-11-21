import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterTemperament,
  getAllTemperament,
} from "../../redux/action/actions";
import { useEffect } from "react";
import style from "../FilterTemperaments/FilterTemperaments.module.css"

const FilterTemperament = () => {
  const temperament = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();

  const temperamentsOrder = temperament.sort((a, b) => {
    //se ordena alfabeticamente para que salga bien en el select
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });

  useEffect(() => {
    dispatch(getAllTemperament());
  }, [dispatch]);

  const onFilterTemperament = (e) => {
    e.preventDefault();
    dispatch(filterTemperament(e.target.value));
    
  };

  return (
    <div className={style.div}>
      <select className={style.select} onChange={onFilterTemperament}>
        <option value="All Temperaments" key="All Temperaments">
          All Temperaments
          </option>
        {temperamentsOrder.length > 0 &&
          temperamentsOrder.map((el) => (
            <option value={el.name} key={el.name}>
              {el.name}
              </option>
          ))}
      </select>
    </div>
  );
};

export default FilterTemperament;
