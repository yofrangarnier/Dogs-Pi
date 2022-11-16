import  React, { useState }  from "react";
import { useDispatch } from "react-redux";
import { getBreedName } from "../../redux/action/actions";

const SearchBar = ({paginate}) => {
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
paginate(1)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search Dogs..." value={searchDogs} onChange={handleOnchange}/>
        
      </form>
    </div>
  );
};
export default SearchBar;
