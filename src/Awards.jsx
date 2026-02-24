import React, { useState, useEffect } from "react";
import { UK_LIFE_SKILLS } from "./temp2/ukLifeSkills";
import { TECH_SKILLS } from "./temp2/techLessons";
import { SOFT_SKILLS } from "./temp2/softSkills";
import { ENGLISH_LESSONS } from "./temp2/EnglishLessons";

const Awards = () => {
  const [completedIds, setCompletedIds] = useState([]);

  useEffect(() => {
    // Fetch user progress from local storage
    const savedProgress = JSON.parse(
      localStorage.getItem("sbs_progress") || "[]",
    );
    setCompletedIds(savedProgress);
  }, []);

  // Combine all our lessons into one big array to map through
  const allLessons = [
    ...UK_LIFE_SKILLS,
    ...TECH_SKILLS,
    ...SOFT_SKILLS,
    ...ENGLISH_LESSONS,
  ];

  // Calculate percentage
  const progressPercent =
    allLessons.length > 0
      ? Math.round((completedIds.length / allLessons.length) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-sbs-light p-6 md:p-12 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-sbs-dark mb-4">
            🏆 Your Trophy Room
          </h1>
          <p className="text-xl text-gray-700">
            Track your Side by Side learning progress here.
          </p>
        </header>

        {/* Big Progress Bar */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-12 border-t-8 border-sbs-dark">
          <h2 className="text-2xl font-bold text-sbs-dark mb-2">
            Overall Progress
          </h2>
          <div className="flex justify-between items-end mb-2">
            <span className="text-gray-600 font-medium">Skills Mastered</span>
            <span className="text-3xl font-extrabold text-sbs-mid">
              {progressPercent}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-6">
            <div
              className="bg-green-500 h-6 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            You have completed {completedIds.length} out of {allLessons.length}{" "}
            modules!
          </p>
        </div>

        {/* The Badges Grid */}
        <h3 className="text-2xl font-bold text-sbs-dark mb-6 border-b-2 border-gray-300 pb-2">
          Skill Badges
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allLessons.map((lesson) => {
            const isUnlocked = completedIds.includes(lesson.id);

            return (
              <div
                key={lesson.id}
                className={`p-6 rounded-xl border-4 text-center transition-all ${
                  isUnlocked
                    ? "bg-white border-yellow-400 shadow-md transform hover:-translate-y-1"
                    : "bg-gray-100 border-gray-200 opacity-60 grayscale"
                }`}
              >
                <div className="text-5xl mb-4">{isUnlocked ? "🌟" : "🔒"}</div>
                <h4
                  className={`font-bold text-sm mb-2 ${isUnlocked ? "text-sbs-dark" : "text-gray-500"}`}
                >
                  {lesson.title}
                </h4>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-bold uppercase ${
                    isUnlocked
                      ? "bg-sbs-light text-sbs-mid"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {lesson.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Awards;
