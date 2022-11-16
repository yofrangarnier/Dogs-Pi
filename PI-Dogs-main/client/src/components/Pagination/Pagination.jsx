import React from "react";


const Pagination = ({ paginate, currentPage, postPerPage, totalPost }) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      <ul>
        <button onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}>
          Prev
        </button>
        {pages.map((number) => (
          <button key={number} onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
        <button
          onClick={() =>
            paginate(
              currentPage < pages.length ? currentPage + 1 : pages.length
            )
          }
        >
          Next
        </button>
      </ul>
    </div>
  );
};
export default Pagination;
