import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import "./Style/Home.css";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Swhite from "./Pages/Swhite";
import Sclean from "./Pages/Sclean";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
