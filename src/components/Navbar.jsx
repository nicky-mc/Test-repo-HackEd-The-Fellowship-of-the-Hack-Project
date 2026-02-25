import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // States
  const [a11yMenuOpen, setA11yMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // NEW: Mobile menu state
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
          {/* LOGO */}
          <div className="flex-shrink-0 font-bold text-xl tracking-wider">
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-2xl">🤲</span> SBS Learning
            </Link>
          </div>

          {/* DESKTOP MENU (Hidden on Mobile) */}
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

            {/* Desktop Accessibility Dropdown */}
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

          {/* MOBILE HAMBURGER BUTTON (Hidden on Desktop) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-sbs-light hover:text-white focus:outline-none p-2"
            >
              {/* SVG Icon switches between Hamburger (Menu) and X (Close) */}
              {mobileMenuOpen ? (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-sbs-dark border-t border-sbs-mid shadow-inner">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {/* Mobile Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)} // Close menu when a link is clicked
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  currentPath === link.path
                    ? "bg-sbs-mid text-white"
                    : "text-sbs-light hover:bg-sbs-mid hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Accessibility Toggles */}
            <div className="pt-4 mt-4 border-t border-sbs-mid">
              <div className="px-3 py-2 text-sm font-bold text-sbs-light uppercase tracking-wider">
                ⚙️ Accessibility Options
              </div>

              <label className="flex items-center px-3 py-3 mt-1 bg-sbs-mid rounded-md cursor-pointer text-white">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 rounded text-sbs-dark"
                  checked={dyslexicMode}
                  onChange={() => setDyslexicMode(!dyslexicMode)}
                />
                <span className="ml-3 font-medium">Dyslexia-Friendly Font</span>
              </label>

              <label className="flex items-center px-3 py-3 mt-2 bg-sbs-mid rounded-md cursor-pointer text-white">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 rounded text-sbs-dark"
                  checked={largeTextMode}
                  onChange={() => setLargeTextMode(!largeTextMode)}
                />
                <span className="ml-3 font-medium">Large Text Mode</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
