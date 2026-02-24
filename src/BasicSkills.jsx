import React, { useState } from "react";
import { Link } from "react-router-dom";
import LessonCard from "./components/LessonCard";
import UKHealthCheck from "./components/UkHealthCheck";
import { UK_LIFE_SKILLS } from "./data/lessons";
import BudgetGame from "./components/BudgetGame";

function BasicSkills() {
  const [activeTab, setActiveTab] = useState("lessons");

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-sbs-light font-sans">
      {/* Sidebar Navigation - Hidden on very small screens, shown on medium+ */}
      <nav className="hidden md:flex flex-col w-64 bg-sbs-dark text-white p-6 shadow-xl z-10">
        <h2 className="text-3xl font-bold mb-1">Basic Skills</h2>
        <p className="text-sm text-sbs-light mb-10 opacity-80">
          Side by Side Learning
        </p>

        <button
          onClick={() => setActiveTab("lessons")}
          className={`w-full p-4 mb-3 text-left font-semibold rounded-lg transition-all duration-200 focus:outline-none ${activeTab === "lessons" ? "bg-sbs-mid shadow-inner" : "hover:bg-sbs-mid/50"}`}
        >
          📘 Practical Maths
        </button>
        <button
          onClick={() => setActiveTab("budget")}
          className={`w-full p-4 mb-3 text-left font-semibold rounded-lg transition-all duration-200 focus:outline-none ${activeTab === "budget" ? "bg-sbs-mid shadow-inner" : "hover:bg-sbs-mid/50"}`}
        >
          💰 Bill Checker Tool
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
              Maths
            </button>
            <button
              onClick={() => setActiveTab("budget")}
              className={`px-4 py-2 text-sm font-bold rounded-md ${activeTab === "budget" ? "bg-sbs-dark text-white" : "bg-white text-sbs-dark shadow"}`}
            >
              Budget
            </button>
          </div>
        </div>

        <header className="mb-10 text-sbs-dark">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            {activeTab === "lessons"
              ? "Life Skills & Contextual Maths"
              : "UK Budgeting Tools"}
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            Learn the skills you need for everyday life without the jargon.
            Practical knowledge, side by side.
          </p>
        </header>

        <section className="max-w-3xl">
          {activeTab === "lessons" ? (
            <div>
              {UK_LIFE_SKILLS.map((lesson) => (
                <LessonCard key={lesson.id} data={lesson} />
              ))}
            </div>
          ) : (
            // Wrap the budget tools in a div or fragment so they both show on the "budget" tab
            <div className="flex flex-col gap-8">
              <UKHealthCheck />
              <BudgetGame />
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default BasicSkills;
