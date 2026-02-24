import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import BasicSkills from "./BasicSkills.jsx";
import TechSkills from "./TechSkills.jsx";
import SoftSkills from "./SoftSkills.jsx"; // IMPORT THIS
import "./index.css"; // Ensure Tailwind CSS is imported

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BasicSkills" element={<BasicSkills />} />
        <Route path="/TechSkills" element={<TechSkills />} />
        <Route path="/SoftSkills" element={<SoftSkills />} />{" "}
        {/* UNCOMMENT THIS */}
      </Routes>
    </Router>
  );
}

export default App;
