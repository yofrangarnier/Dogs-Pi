import {React} from "react"
import {Link} from "react-router-dom"


const LandingPAge = () => {
  return (
    <div>
      <h1>Welcome to City dogs</h1>
      <Link to="/Home" />
      <button>Lets Start</button>
    </div>
  );
};
export default LandingPAge;
