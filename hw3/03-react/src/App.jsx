import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Houses from "./Houses.jsx";
import Home from "./Home.jsx";
import Search from "./Search.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/search" exact Component={Search} />
          <Route path="/houses" exact Component={Houses} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
