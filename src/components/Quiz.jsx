import React, { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Madrid", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    options: ["Central Style Sheet", "Cascading Style Sheet", "Colorful Style Sheet", "Computer Style Sheet"],
    answer: "Cascading Style Sheet",
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      {!showResult ? (
        <>
          <h2 className="text-lg font-semibold mb-4">{questions[current].question}</h2>
          <div className="space-y-2">
            {questions[current].options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(option)}
                className="w-full bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded"
              >
                {option}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">Quiz Completed ✅</h2>
          <p className="text-lg">Your Score: {score} / {questions.length}</p>
        </div>
      )}
    </div>
  );
}
