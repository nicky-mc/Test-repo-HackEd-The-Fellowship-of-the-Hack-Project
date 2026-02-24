import React, { useState, useEffect } from "react";

const LessonCard = ({ data }) => {
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  // Check if this lesson was already completed in previous sessions
  useEffect(() => {
    const savedProgress = JSON.parse(
      localStorage.getItem("sbs_progress") || "[]",
    );
    if (savedProgress.includes(data.id)) {
      setIsCompleted(true);
    }
  }, [data.id]);

  const handleCheck = (index) => {
    setSelected(index);
    const correct = index === data.correctAnswer;
    setIsCorrect(correct);

    // If correct, award a badge and save to local storage
    if (correct && !isCompleted) {
      const savedProgress = JSON.parse(
        localStorage.getItem("sbs_progress") || "[]",
      );
      if (!savedProgress.includes(data.id)) {
        savedProgress.push(data.id);
        localStorage.setItem("sbs_progress", JSON.stringify(savedProgress));
        setIsCompleted(true);
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6 transition-transform hover:-translate-y-1 relative">
      {/* Gamification Badge */}
      {isCompleted && (
        <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-extrabold shadow-sm flex items-center">
          ⭐ COMPLETED
        </div>
      )}

      <span className="bg-sbs-light text-sbs-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
        {data.category}
      </span>
      <h2 className="text-sbs-dark text-2xl font-bold mt-4 mb-4">
        {data.title}
      </h2>

      {/* NEW: Video Embed Section */}
      {data.videoUrl && (
        <div className="mb-5 rounded-lg overflow-hidden shadow-sm aspect-video">
          <iframe
            className="w-full h-full"
            src={data.videoUrl}
            title="Video Lesson"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <div className="bg-sbs-light text-sbs-dark p-4 rounded-lg mb-5 border border-blue-100">
        <p>
          <strong>The Situation:</strong> {data.scenario}
        </p>
      </div>

      <div className="mb-5">
        <p className="font-bold text-sbs-dark mb-3">
          The Task: {data.mathProblem}
        </p>
        {data.options.map((opt, i) => {
          let btnClass =
            "block w-full p-4 my-2 border-2 border-sbs-light rounded-lg bg-white text-gray-800 text-left cursor-pointer transition-colors duration-200 hover:border-sbs-mid focus:outline-none";

          if (selected === i) {
            if (isCorrect) {
              btnClass =
                "block w-full p-4 my-2 border-2 border-green-500 rounded-lg bg-green-50 text-green-900 text-left font-semibold focus:outline-none";
            } else {
              btnClass =
                "block w-full p-4 my-2 border-2 border-red-500 rounded-lg bg-red-50 text-red-900 text-left font-semibold focus:outline-none";
            }
          }

          return (
            <button key={i} onClick={() => handleCheck(i)} className={btnClass}>
              {opt}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div className="bg-sbs-light border-l-4 border-sbs-dark p-4 mt-5 rounded-r-lg">
          <h4 className="text-sbs-dark font-bold mb-2">
            💡 Real-World Context
          </h4>
          <p className="mb-2 leading-relaxed text-gray-700">
            {data.realLifeContext}
          </p>
          <p className="text-sm text-sbs-mid italic m-0">
            Formula/Rule: {data.formula}
          </p>
        </div>
      )}
    </div>
  );
};

export default LessonCard;
