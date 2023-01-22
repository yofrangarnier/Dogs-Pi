import { BrowserRouter, Route } from "react-router-dom";
import LandigPage from "./components/LandingPage/LandindPage";
import Home from "./components/Home/Home";
import BreedDetail from "./components/BreedDetail/BreedDetail"
import CreateBreed from "./components/CreateBreed/CreateBreed";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path="/">
        <LandigPage />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/detail/:id">
        <BreedDetail />
      </Route>
      <Route path="/createdogs">
        <CreateBreed />
      </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
