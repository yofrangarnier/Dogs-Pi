import { React } from "react";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../../redux/action/actions";
import BreedCards from "../BreedCards/BreedCards";
import Order from "../OrderA-Z/Order-AZ";
import Pagination from "../Pagination/Pagination";
import FilterDogs from "../FilterDogs/FilterDogs";
import style from "../Home/Home.module.css";
import FilterTemperaments from "../FilterTemperaments/FilterTemperaments";
import NavBar from "../NavBar/NavBar";
import Carousel from "../Carousel/Carousel";
import Loader from "../Loading/Loading";

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
    <div >
      <NavBar />
      <div className={style.h1}>
      <h1 >Welcome to my city dogs</h1>
      </div>
      <Carousel/>
      <div className={style.filter}>
        <Order paginate={paginate} />
        <FilterDogs paginate={paginate} />
        <FilterTemperaments />
        </div>
      
        {currentPosts.length > 0 ? (
          currentPosts.map((e) => {
            return (
              <div className={style.card} key={e.id}>
                <BreedCards
                  id={e.id}
                  name={e.name}
                  image={e.image}
                  max_weight={e.max_weight}
                  min_weight={e.min_weight}
                  temperament={e.temperament}
                />
              </div>
            );
          })
          ) : (
            <div className={style.loader}>
              <Loader />
            </div>
          )}
        
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
