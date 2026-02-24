import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Accessibility States
  const [a11yMenuOpen, setA11yMenuOpen] = useState(false);
  const [dyslexicMode, setDyslexicMode] = useState(false);
  const [largeTextMode, setLargeTextMode] = useState(false);

  // Apply CSS classes to the <body> tag when toggles change
  useEffect(() => {
    if (dyslexicMode) document.body.classList.add("dyslexic-mode");
    else document.body.classList.remove("dyslexic-mode");

    if (largeTextMode) document.body.classList.add("large-text-mode");
    else document.body.classList.remove("large-text-mode");
  }, [dyslexicMode, largeTextMode]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Basic Skills", path: "/BasicSkills" },
    { name: "Tech Skills", path: "/TechSkills" },
    { name: "Soft Skills", path: "/SoftSkills" },
    { name: "🏆 Awards", path: "/Awards" },
  ];

  return (
    <nav className="bg-sbs-dark text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl tracking-wider">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl">🤲</span> SBS Learning
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPath === link.path
                    ? "bg-sbs-mid text-white"
                    : "text-sbs-light hover:bg-sbs-mid/50 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Accessibility Dropdown */}
            <div className="relative ml-4">
              <button
                onClick={() => setA11yMenuOpen(!a11yMenuOpen)}
                className="bg-sbs-mid px-3 py-2 rounded-md text-sm font-bold flex items-center hover:bg-blue-600 transition"
              >
                ⚙️ Accessibility
              </button>

              {a11yMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-xl py-2 z-50 border border-gray-200 text-gray-800">
                  <div className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider border-b">
                    Viewing Options
                  </div>

                  <label className="flex items-center px-4 py-3 hover:bg-gray-100 cursor-pointer">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-sbs-dark rounded"
                      checked={dyslexicMode}
                      onChange={() => setDyslexicMode(!dyslexicMode)}
                    />
                    <span className="ml-3 text-sm font-medium">
                      Dyslexia-Friendly Font
                    </span>
                  </label>

                  <label className="flex items-center px-4 py-3 hover:bg-gray-100 cursor-pointer">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-sbs-dark rounded"
                      checked={largeTextMode}
                      onChange={() => setLargeTextMode(!largeTextMode)}
                    />
                    <span className="ml-3 text-sm font-medium">
                      Large Text Mode
                    </span>
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
