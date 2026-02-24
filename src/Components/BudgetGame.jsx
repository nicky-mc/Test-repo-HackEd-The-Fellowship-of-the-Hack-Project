import React, { useState } from "react";

// A pool of random events to make every game different
const RANDOM_EVENTS = [
  {
    text: "Your washing machine broke. Repair it (£60) or use the laundrette all month (£25)?",
    opt1: { text: "Repair (-£60)", bal: -60, well: +10 },
    opt2: { text: "Laundrette (-£25)", bal: -25, well: -15 },
  },
  {
    text: "A friend invites you to a concert (£45).",
    opt1: { text: "Go (-£45)", bal: -45, well: +20 },
    opt2: { text: "Stay home (£0)", bal: 0, well: -10 },
  },
  {
    text: "You feel exhausted. Cook dinner (£5) or order a takeaway (£20)?",
    opt1: { text: "Cook (-£5)", bal: -5, well: -5 },
    opt2: { text: "Takeaway (-£20)", bal: -20, well: +15 },
  },
  {
    text: "You got a small tax rebate! (+£50)",
    opt1: { text: "Put in Savings", bal: 0, save: +50, well: +5 },
    opt2: { text: "Treat yourself", bal: +50, save: 0, well: +10 },
  },
];

const BudgetGame = () => {
  const [turn, setTurn] = useState(0);
  const [balance, setBalance] = useState(1200); // Starting wage
  const [savings, setSavings] = useState(0);
  const [wellbeing, setWellbeing] = useState(50); // Out of 100
  const [gameOver, setGameOver] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  // Core mandatory bills
  const BILLS = [
    { name: "Rent & Council Tax", amount: -650 },
    { name: "Energy & Water", amount: -120 },
    { name: "Groceries (Basic)", amount: -150 },
  ];

  const startGame = () => {
    setTurn(1);
    setBalance(1200);
    setSavings(0);
    setWellbeing(50);
    setGameOver(false);
    pickRandomEvent();
  };

  const pickRandomEvent = () => {
    const randomIdx = Math.floor(Math.random() * RANDOM_EVENTS.length);
    setCurrentEvent(RANDOM_EVENTS[randomIdx]);
  };

  const payBills = () => {
    const totalBills = BILLS.reduce((acc, bill) => acc + bill.amount, 0);
    setBalance((prev) => prev + totalBills);
    setTurn(2);
    pickRandomEvent();
  };

  const handleChoice = (impacts) => {
    setBalance((prev) => prev + (impacts.bal || 0));
    setSavings((prev) => prev + (impacts.save || 0));
    setWellbeing((prev) => Math.min(100, prev + (impacts.well || 0))); // Max 100

    if (turn >= 5) {
      setGameOver(true);
    } else {
      setTurn(turn + 1);
      pickRandomEvent();
    }
  };

  if (turn === 0) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-md text-center border-t-8 border-sbs-dark">
        <h2 className="text-3xl font-bold text-sbs-dark mb-4">
          The Month Survival Game
        </h2>
        <p className="text-gray-600 mb-6">
          Balance your money, build your savings, and don't let your wellbeing
          drop to zero!
        </p>
        <button
          onClick={startGame}
          className="bg-sbs-dark text-white px-8 py-3 rounded-lg font-bold hover:bg-sbs-mid"
        >
          Start Month
        </button>
      </div>
    );
  }

  if (gameOver) {
    const isSuccess = balance >= 0 && wellbeing > 20;
    return (
      <div className="bg-white p-8 rounded-xl shadow-md text-center">
        <h2 className="text-3xl font-bold text-sbs-dark mb-4">
          Month Complete!
        </h2>
        <div className="grid grid-cols-3 gap-4 mb-6 text-xl">
          <div className="bg-blue-50 p-4 rounded-lg">
            <strong>Balance:</strong> £{balance}
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <strong>Savings:</strong> £{savings}
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <strong>Wellbeing:</strong> {wellbeing}/100
          </div>
        </div>
        {isSuccess ? (
          <p className="text-green-600 bg-green-100 p-4 rounded-lg mb-6 font-bold">
            Incredible! You survived the month, kept your sanity, and managed
            your money.
          </p>
        ) : (
          <p className="text-red-600 bg-red-100 p-4 rounded-lg mb-6 font-bold">
            Rough month. Remember: borrowing causes stress, but ignoring your
            mental health does too. Balance is key!
          </p>
        )}
        <button
          onClick={startGame}
          className="bg-sbs-dark text-white px-8 py-3 rounded-lg font-bold hover:bg-sbs-mid"
        >
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6 border-t-8 border-sbs-mid">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h3 className="text-xl font-bold text-gray-700">Week {turn} of 5</h3>
        <div className="flex gap-4">
          <span className="font-bold text-blue-800 bg-blue-100 px-3 py-1 rounded">
            Bal: £{balance}
          </span>
          <span className="font-bold text-green-800 bg-green-100 px-3 py-1 rounded">
            Sav: £{savings}
          </span>
          <span
            className={`font-bold px-3 py-1 rounded ${wellbeing > 30 ? "text-yellow-800 bg-yellow-100" : "text-red-800 bg-red-100"}`}
          >
            Joy: {wellbeing}
          </span>
        </div>
      </div>

      {turn === 1 ? (
        <div className="text-center">
          <p className="text-xl mb-6">
            Payday! £1200 has hit your account. But your direct debits are due.
          </p>
          <button
            onClick={payBills}
            className="bg-red-500 text-white w-full p-4 rounded-lg font-bold hover:bg-red-600"
          >
            Pay Essential Bills (-£920)
          </button>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-xl mb-6 bg-gray-50 p-6 rounded-lg">
            {currentEvent?.text}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => handleChoice(currentEvent.opt1)}
              className="bg-sbs-dark text-white p-4 rounded-lg font-bold hover:bg-sbs-mid"
            >
              {currentEvent.opt1.text}
            </button>
            <button
              onClick={() => handleChoice(currentEvent.opt2)}
              className="border-2 border-sbs-dark text-sbs-dark p-4 rounded-lg font-bold hover:bg-sbs-light"
            >
              {currentEvent.opt2.text}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BudgetGame;
