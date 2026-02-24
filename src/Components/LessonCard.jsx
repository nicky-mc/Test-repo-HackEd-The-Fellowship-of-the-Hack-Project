import React, { useState } from "react";

const LessonCard = ({ data }) => {
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleCheck = (index) => {
    setSelected(index);
    setIsCorrect(index === data.correctAnswer);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6 transition-transform hover:-translate-y-1">
      <span className="bg-sbs-light text-sbs-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
        {data.category}
      </span>
      <h2 className="text-sbs-dark text-2xl font-bold mt-4 mb-4">
        {data.title}
      </h2>

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
          // Default Tailwind button classes
          let btnClass =
            "block w-full p-4 my-2 border-2 border-sbs-light rounded-lg bg-white text-gray-800 text-left cursor-pointer transition-colors duration-200 hover:border-sbs-mid focus:outline-none";

          // Change color based on right/wrong answer
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
