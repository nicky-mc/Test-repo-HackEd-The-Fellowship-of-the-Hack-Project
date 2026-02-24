import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./Home.jsx";
import BasicSkills from "./BasicSkills.jsx";
import TechSkills from "./TechSkills.jsx";
import SoftSkills from "./SoftSkills.jsx";
import Awards from "./Awards.jsx"; // IMPORT THE NEW PAGE
import "../src/index.css"; // Ensure Tailwind CSS is imported

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-sbs-light font-sans flex flex-col">
        <Navbar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/BasicSkills" element={<BasicSkills />} />
            <Route path="/TechSkills" element={<TechSkills />} />
            <Route path="/SoftSkills" element={<SoftSkills />} />
            <Route path="/Awards" element={<Awards />} />{" "}
            {/* NEW ROUTE ADDED */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
