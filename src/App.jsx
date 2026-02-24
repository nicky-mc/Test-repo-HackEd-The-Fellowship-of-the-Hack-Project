import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
// import TechSkills from "./TechSkills.jsx";
// import SoftSkills from "./SoftSkills";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/TechSkills" element={<TechSkills />} /> */}
        {/* <Route path="/SoftSkills" element={<SoftSkills />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
