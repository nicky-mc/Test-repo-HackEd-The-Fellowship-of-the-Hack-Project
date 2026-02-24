import React, { useState } from "react";
import { Link } from "react-router-dom";
import LessonCard from "./Components/LessonCard";
import PasswordChecker from "./Components/PasswordChecker";
import { TECH_SKILLS } from "./Data/techLessons";

function TechSkills() {
  const [activeTab, setActiveTab] = useState("lessons");

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-sbs-light font-sans">
      {/* Sidebar Navigation */}
      <nav className="hidden md:flex flex-col w-64 bg-sbs-dark text-white p-6 shadow-xl z-10">
        <h2 className="text-3xl font-bold mb-1">Tech Skills</h2>
        <p className="text-sm text-sbs-light mb-10 opacity-80">
          Side by Side Learning
        </p>

        <button
          onClick={() => setActiveTab("lessons")}
          className={`w-full p-4 mb-3 text-left font-semibold rounded-lg transition-all duration-200 focus:outline-none ${activeTab === "lessons" ? "bg-sbs-mid shadow-inner" : "hover:bg-sbs-mid/50"}`}
        >
          📱 Digital Safety
        </button>
        <button
          onClick={() => setActiveTab("tools")}
          className={`w-full p-4 mb-3 text-left font-semibold rounded-lg transition-all duration-200 focus:outline-none ${activeTab === "tools" ? "bg-sbs-mid shadow-inner" : "hover:bg-sbs-mid/50"}`}
        >
          🔑 Password Tester
        </button>

        <div className="mt-auto pt-10">
          <Link
            to="/"
            className="text-sbs-light hover:text-white transition-colors text-sm flex items-center"
          >
            <span className="mr-2">←</span> Back to Home
          </Link>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        {/* Mobile top nav fallback */}
        <div className="md:hidden flex justify-between items-center mb-6 pb-4 border-b border-gray-300">
          <Link to="/" className="text-sbs-dark font-bold text-sm">
            ← Home
          </Link>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("lessons")}
              className={`px-4 py-2 text-sm font-bold rounded-md ${activeTab === "lessons" ? "bg-sbs-dark text-white" : "bg-white text-sbs-dark shadow"}`}
            >
              Safety
            </button>
            <button
              onClick={() => setActiveTab("tools")}
              className={`px-4 py-2 text-sm font-bold rounded-md ${activeTab === "tools" ? "bg-sbs-dark text-white" : "bg-white text-sbs-dark shadow"}`}
            >
              Tools
            </button>
          </div>
        </div>

        <header className="mb-10 text-sbs-dark">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            {activeTab === "lessons" ? "Everyday Digital Safety" : "Tech Tools"}
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            Learn how to spot scams, stay safe online, and use everyday
            technology with confidence.
          </p>
        </header>

        <section className="max-w-3xl">
          {activeTab === "lessons" ? (
            <div>
              {TECH_SKILLS.map((lesson) => (
                <LessonCard key={lesson.id} data={lesson} />
              ))}
            </div>
          ) : (
            <PasswordChecker />
          )}
        </section>
      </main>
    </div>
  );
}

export default TechSkills;
