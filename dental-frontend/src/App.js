import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import "./Style/Home.css";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Swhite from "./Pages/Swhite";
import Sclean from "./Pages/Sclean";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sfilling from "./Pages/Sfilling";
import Simplant from "./Pages/Simplant";
import Scrown from "./Pages/Scrown";
import Sdesign from "./Pages/Sdesign";
import Sdentures from "./Pages/Sdentures";
import Snerve from "./Pages/Snerve";

function App() {
  return (
    <Router>
      <div className="Ap">
        {/* <Home /> */}
        {/* <About /> */}
        {/* <Services /> */}
        {/* <Swhite /> */}
        {/* <Sclean /> */}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/swhite" element={<Swhite />} />
          <Route path="/sclean" element={<Sclean />} />
          <Route path="/sfilling" element={<Sfilling />} />
          <Route path="/simplant" element={<Simplant />} />
          <Route path="/scrown" element={<Scrown />} />
          <Route path="/sdesign" element={<Sdesign />} />
          <Route path="/sdentures" element={<Sdentures />} />
          <Route path="/snerve" element={<Snerve />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
