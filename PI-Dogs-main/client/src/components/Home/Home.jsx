import { React } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../../redux/action/actions";
import BreedCards from "../BreedCards/BreedCards";
import NavBar from "../NavBar/NavBar";
import Pagination from "../Pagination/Pagination";
import style from "../Home/Home.module.css";

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
      <Link to="/home">Create Dogs</Link>
      <h1>My Little Dogs</h1>

      <di>
        <NavBar paginate={paginate} />
      </di>
      <div>
        {currentPosts?.map((e) => {
          return (
            <div className={style.card}>
              <Link to={"/home/" + e.id}>
                <BreedCards
                  key={e.id}
                  name={e.name}
                  image={e.image}
                  max_weight={e.max_weight}
                  min_weight={e.min_weight}
                  temperament={e.temperament}
                />
              </Link>
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
