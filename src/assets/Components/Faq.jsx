import React, { useState } from "react";

export default function Faq() {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);

  const toggleAnswer1 = () => {
    setShowAnswer1(!showAnswer1);
  };

  const toggleAnswer2 = () => {
    setShowAnswer2(!showAnswer2);
  };

  const toggleAnswer3 = () => {
    setShowAnswer3(!showAnswer3);
  };

  return (
    <div className="w-1/2">
      <h1 className="text-4xl ml-32 mt-8 font-semibold bg-gradient-to-b from-deep-blue via-darker-blue via-blue to-medium-blue bg-clip-text text-transparent w-20">
        FAQ
      </h1>
      <div className="mt-4 ml-32">
        <button
          onClick={toggleAnswer1}
          className="w-full py-2 px-4 rounded-lg bg-white shadow-md border border-gray-300 focus:outline-none flex justify-between items-center"
        >
          <span className="text-gray-800">
            Can education flashacard be usefull for all agegroups?
          </span>
          <svg
            className={`h-6 w-6 transition-transform transform ${showAnswer1 ? "rotate-180" : "rotate-0"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {showAnswer1 && (
          <p className="text-gray-600 mt-2">
            Yes, flashcards can be useful for learning at any age. They are
            versatile tools that can aid in memory retention and enhance
            learning across various subjects and age groups. For young children,
            flashcards can be used to teach basic concepts such as colors,
            shapes, letters, and numbers. In elementary and middle school,
            flashcards can help reinforce vocabulary, math facts, historical
            events, and scientific concepts. For high school and college
            students, flashcards are commonly used for studying complex subjects
            like foreign languages, anatomy, chemistry, and literature.
          </p>
        )}
      </div>
      <div className="mt-4 ml-32">
        <button
          onClick={toggleAnswer2}
          className="w-full py-2 px-4 rounded-lg bg-white shadow-md border border-gray-300 focus:outline-none flex justify-between items-center"
        >
          <span className="text-gray-800">
            How do education flashcard works?
          </span>
          <svg
            className={`h-6 w-6 transition-transform transform ${showAnswer2 ? "rotate-180" : "rotate-0"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {showAnswer2 && (
          <p className="text-gray-600 mt-2">
            Education flashcards condense information into questions and
            answers, aiding memory retention through repetitive review. Users
            engage in active recall, testing their knowledge and reinforcing
            learning. By systematically reviewing and applying the content,
            flashcards enhance comprehension and retention across various
            subjects and age groups.
          </p>
        )}
      </div>
      <div className="mt-4 ml-32">
        <button
          onClick={toggleAnswer3}
          className="w-full py-2 px-4 rounded-lg bg-white shadow-md border border-gray-300 focus:outline-none flex justify-between items-center"
        >
          <span className="text-gray-800">
            Can education flashcards be used for test preparation?{" "}
          </span>
          <svg
            className={`h-6 w-6 transition-transform transform ${showAnswer3 ? "rotate-180" : "rotate-0"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {showAnswer3 && (
          <p className="text-gray-600 mt-2">
            Yes, education flashcards are commonly used for test preparation.
            They provide a concise way to review key concepts, aiding in memory
            retention and allowing users to assess their knowledge. Flashcards
            facilitate active recall, making them effective study tools for
            exams.
          </p>
        )}
      </div>
    </div>
  );
}
