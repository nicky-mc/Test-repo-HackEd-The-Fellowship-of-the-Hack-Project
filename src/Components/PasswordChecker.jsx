import React, { useState } from "react";

const PasswordChecker = () => {
  const [password, setPassword] = useState("");

  // Calculate password strength based on criteria
  const calculateStrength = (pwd) => {
    let score = 0;
    if (pwd.length > 0) score += 1; // Typed something
    if (pwd.length >= 8) score += 1; // Good length
    if (pwd.length >= 12) score += 1; // Great length (3 random words)
    if (/[A-Z]/.test(pwd)) score += 1; // Has uppercase
    if (/[0-9]/.test(pwd)) score += 1; // Has number
    if (/[^A-Za-z0-9]/.test(pwd)) score += 1; // Has symbol
    return score;
  };

  const strength = calculateStrength(password);

  let strengthLabel = "Too short";
  let barColor = "bg-red-500";
  let barWidth = "w-0";

  if (password.length > 0) {
    if (strength <= 2) {
      strengthLabel = "Weak";
      barColor = "bg-red-500";
      barWidth = "w-1/4";
    } else if (strength <= 4) {
      strengthLabel = "Moderate";
      barColor = "bg-yellow-500";
      barWidth = "w-2/4";
    } else if (strength <= 5) {
      strengthLabel = "Strong";
      barColor = "bg-green-500";
      barWidth = "w-3/4";
    } else {
      strengthLabel = "Very Strong!";
      barColor = "bg-sbs-dark";
      barWidth = "w-full";
    }
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
      <h3 className="text-sbs-dark text-2xl font-bold mb-2">
        Password Strength Checker 🔐
      </h3>
      <p className="text-gray-600 mb-6">
        Test your password ideas here. (We do not save or store what you type!)
      </p>

      <div className="mb-4">
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Type a password to test..."
          className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sbs-mid text-lg"
        />
      </div>

      <div className="mb-2 flex justify-between items-center">
        <span className="font-bold text-gray-700">Strength:</span>
        <span
          className={`font-bold ${strength >= 5 ? "text-green-600" : "text-gray-700"}`}
        >
          {password.length > 0 ? strengthLabel : ""}
        </span>
      </div>

      {/* Tailwind Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
        <div
          className={`${barColor} ${barWidth} h-3 rounded-full transition-all duration-300`}
        ></div>
      </div>

      <div className="bg-sbs-light border-l-4 border-sbs-mid p-4 rounded-r-lg text-sbs-dark text-sm">
        <p className="font-bold mb-1">Pro Tip for a Strong Password:</p>
        <ul className="list-disc pl-5">
          <li>
            Combine 3 random words (e.g.,{" "}
            <span className="italic">FishClockWindow</span>)
          </li>
          <li>
            Add a number and a symbol (e.g.,{" "}
            <span className="italic">FishClockWindow9!</span>)
          </li>
          <li>Never use your name, pet's name, or year of birth.</li>
        </ul>
      </div>
    </div>
  );
};

export default PasswordChecker;
