import React from "react";
import FilterDogs from "../FilterDogs/FilterDogs";
import SearchBar from "../SeachBar/SearchBar";
import Order from "../OrderA-Z/Order-AZ";
import FilterTemperaments from "../FilterTemperaments/FilterTemperaments";
// import style from "../NavBar/NavBar.module.css";

const NavBar = (paginate) => {
  return (
    <div >
      <button onClick={() => window.location.reload()}>Refresh Dogs</button>
      
        <SearchBar />
      
      
        <Order paginate={paginate} />
      
      
        <FilterDogs paginate={paginate} />
      
      
        <FilterTemperaments />
      
    </div>
  );
};

export default NavBar;
