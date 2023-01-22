import  React, { useState }  from "react";
import { useDispatch } from "react-redux";
import { getBreedName } from "../../redux/action/actions";
import style from "../SeachBar/SearchBar.module.css"

const SearchBar = () => {
  const [searchDogs, setSearchDogs] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
e.preventDefault()
if(!searchDogs)  alert(" Name Dogs is Require")
dispatch(getBreedName(searchDogs))
setSearchDogs("")
  }
  const handleOnchange = (e) => {
e.preventDefault()
setSearchDogs(e.target.value)

  }

  return (
    <div className={style.searchbar}>
      <form onSubmit={handleSubmit}>
        <input className={style.input} type="text" placeholder="Search Dogs..." value={searchDogs} onChange={handleOnchange}/>
        <input  type="submit" value="Buscar" className={style.btn}/>
      </form>
    </div>
  );
};
export default SearchBar;
