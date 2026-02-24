import React, { useState } from "react";
import { Link } from "react-router-dom";
import LessonCard from "./Components/LessonCard";
import EmailBuilder from "./Components/EmailBuilder";
import { SOFT_SKILLS } from "./Data/softSkills";
import { ENGLISH_LESSONS } from "./Data/EnglishLessons";

function SoftSkills() {
  const [activeTab, setActiveTab] = useState("english");

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-sbs-light font-sans">
      {/* Sidebar Navigation */}
      <nav className="hidden md:flex flex-col w-64 bg-sbs-dark text-white p-6 shadow-xl z-10">
        <h2 className="text-3xl font-bold mb-1">Communication</h2>
        <p className="text-sm text-sbs-light mb-10 opacity-80">
          Side by Side Learning
        </p>

        <button
          onClick={() => setActiveTab("english")}
          className={`w-full p-4 mb-3 text-left font-semibold rounded-lg transition-all duration-200 focus:outline-none ${activeTab === "english" ? "bg-sbs-mid shadow-inner" : "hover:bg-sbs-mid/50"}`}
        >
          📝 Everyday English
        </button>
        <button
          onClick={() => setActiveTab("interviews")}
          className={`w-full p-4 mb-3 text-left font-semibold rounded-lg transition-all duration-200 focus:outline-none ${activeTab === "interviews" ? "bg-sbs-mid shadow-inner" : "hover:bg-sbs-mid/50"}`}
        >
          🗣️ CVs & Interviews
        </button>
        <button
          onClick={() => setActiveTab("email")}
          className={`w-full p-4 mb-3 text-left font-semibold rounded-lg transition-all duration-200 focus:outline-none ${activeTab === "email" ? "bg-sbs-mid shadow-inner" : "hover:bg-sbs-mid/50"}`}
        >
          ✉️ Email Builder
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
        <div className="md:hidden flex flex-wrap gap-2 mb-6 pb-4 border-b border-gray-300">
          <Link to="/" className="w-full text-sbs-dark font-bold text-sm mb-2">
            ← Home
          </Link>
          <button
            onClick={() => setActiveTab("english")}
            className={`px-3 py-2 text-xs font-bold rounded-md ${activeTab === "english" ? "bg-sbs-dark text-white" : "bg-white text-sbs-dark shadow"}`}
          >
            English
          </button>
          <button
            onClick={() => setActiveTab("interviews")}
            className={`px-3 py-2 text-xs font-bold rounded-md ${activeTab === "interviews" ? "bg-sbs-dark text-white" : "bg-white text-sbs-dark shadow"}`}
          >
            Interviews
          </button>
          <button
            onClick={() => setActiveTab("email")}
            className={`px-3 py-2 text-xs font-bold rounded-md ${activeTab === "email" ? "bg-sbs-dark text-white" : "bg-white text-sbs-dark shadow"}`}
          >
            Emails
          </button>
        </div>

        <header className="mb-10 text-sbs-dark">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            {activeTab === "english" && "Reading & Writing Confidence"}
            {activeTab === "interviews" && "Job Readiness & Interviews"}
            {activeTab === "email" && "Professional Communication Tool"}
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            Translate official jargon, handle tricky interview questions, and
            communicate like a pro.
          </p>
        </header>

        <section className="max-w-3xl">
          {activeTab === "english" && (
            <div>
              {ENGLISH_LESSONS.map((lesson) => (
                <LessonCard key={lesson.id} data={lesson} />
              ))}
            </div>
          )}
          {activeTab === "interviews" && (
            <div>
              {SOFT_SKILLS.map((lesson) => (
                <LessonCard key={lesson.id} data={lesson} />
              ))}
            </div>
          )}
          {activeTab === "email" && <EmailBuilder />}
        </section>
      </main>
    </div>
  );
}

export default SoftSkills;
