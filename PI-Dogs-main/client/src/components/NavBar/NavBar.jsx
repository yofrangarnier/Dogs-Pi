import React from "react";
import SearchBar from "../SeachBar/SearchBar";
import style from "../NavBar/NavBar.module.css";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div className={style.navbar}>
      <div>
        <button className={style.btnes}>
          <Link to="/home">Home</Link>
        </button>
      </div>
      <SearchBar />
      <div>
        <button className={style.btnes}>
          <Link to="/createdogs">Create Dog</Link>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
