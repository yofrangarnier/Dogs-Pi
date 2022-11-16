import { BrowserRouter, Route } from "react-router-dom";
import LandigPage from "./components/LandingPage/LandindPage";
import Home from "./components/Home/Home";
import BreedDetail from "./components/BreedDetail/BreedDetail"
import CreateBreed from "./components/CreateBreed/CreateBreed";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <LandigPage />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/home/:id">
        <BreedDetail />
      </Route>
      <Route exact path="/createdogs">
        <CreateBreed />
      </Route>
    </BrowserRouter>
  );
}

export default App;
