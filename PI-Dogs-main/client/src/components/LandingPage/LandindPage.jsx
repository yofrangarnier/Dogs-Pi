import { React } from "react";
import { Link } from "react-router-dom";
import style from "../LandingPage/landingpage.module.css";

const LandingPage = () => {
  return (
    <div className={style.title}>
      <section className={style}>
        <h1 className={style.h1}><i>Welcome to City dog</i></h1>
        <Link to="/Home">
          <button className={style.btn} onClick="home">
            Enter
          </button>
        </Link>
      </section>
    </div>
  );
};
export default LandingPage;
