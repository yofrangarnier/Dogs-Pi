import React from "react";
import style from "../Pagination/Pagination.module.css"


const Pagination = ({ paginate, currentPage, postPerPage, totalPost }) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <button  claseName={style.number}  onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}>
          Prev
        </button>
        {pages.map((number) => (
          <button  className={style.number} key={number} onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
        <button className={style.number}
          onClick={() =>
            paginate(
              currentPage < pages.length ? currentPage + 1 : pages.length
            )
          }
        >
          Next
        </button>
      </ul>
   </nav>
  );
};
export default Pagination;
