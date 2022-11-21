import { React } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../../redux/action/actions";
import BreedCards from "../BreedCards/BreedCards";
import Order from "../OrderA-Z/Order-AZ";
import Pagination from "../Pagination/Pagination";
import FilterDogs from "../FilterDogs/FilterDogs";
import style from "../Home/Home.module.css";
import FilterTemperaments from "../FilterTemperaments/FilterTemperaments";

import FilterWeight from "../FilterWeight/FilterWeight";

const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = allDogs.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={style.home}>
      <div className={style.h1}>
        <h1 >My Little Dogs</h1>
      </div>
      <div>
        <button className={style.btnCreate}>
          <Link to="/createdogs">
            <span className={style.box}>CREATE DOG</span>
          </Link>
        </button>
      </div>

      <div className={style.filters}>
        <FilterWeight />
        <Order paginate={paginate} />

        <FilterDogs paginate={paginate} />

        <FilterTemperaments />
      </div>
      <div>
        {currentPosts?.map((e) => {
          return (
            <div className={style.card}>
              <BreedCards
                id={e.id}
                key={e.id}
                name={e.name}
                image={e.image}
                max_weight={e.max_weight}
                min_weight={e.min_weight}
                temperament={e.temperament}
              />
            </div>
          );
        })}
      </div>
      <div className={style.pages}>
        <Pagination
          paginate={paginate}
          currentPage={currentPage}
          postPerPage={postPerPage}
          totalPost={allDogs.length}
        />
      </div>
    </div>
  );
};
export default Home;
