import  React, { useState }  from "react";
import { useDispatch } from "react-redux";
import { getBreedName } from "../../redux/action/actions";
import style from "../SeachBar/SearchBar.module.css"

const SearchBar = () => {
  const [searchDogs, setsearchDogs] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
e.preventDefault()
if(!searchDogs) return alert("Dogs is Require")
dispatch(getBreedName(searchDogs))
setsearchDogs("")
  }
  const handleOnchange = (e) => {
e.preventDefault()
setsearchDogs(e.target.value)

  }

  return (
    <div className={style.select}>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search Dogs..." value={searchDogs} onChange={handleOnchange}/>
        
      </form>
    </div>
  );
};
export default SearchBar;
