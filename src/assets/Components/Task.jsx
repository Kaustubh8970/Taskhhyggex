import React, { useState } from 'react';

const Task = () => {
  const quizData = [
    {
      question: 'Which language runs in a web browser?',
      a: 'Java',
      b: 'C',
      c: 'Python',
      d: 'JavaScript',
      correct: 'd'
    },
    {
      question: 'What does CSS stand for?',
      a: 'Central Style Sheets',
      b: 'Cascading Style Sheets',
      c: 'Cascading Simple Sheets',
      d: 'Cars SUVs Sailboats',
      correct: 'b'
    },
    {
      question: 'What does HTML stand for?',
      a: 'Hypertext Markup Language',
      b: 'Hypertext Markdown Language',
      c: 'Hyperloop Machine Language',
      d: 'Helicopters Terminals Motorboats Lamborginis',
      correct: 'a'
    },
    {
      question: 'What year was JavaScript launched?',
      a: '1996',
      b: '1995',
      c: '1994',
      d: 'none of the above',
      correct: 'b'
    }
  ];

  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    const correctAnswer = quizData[currentQuiz].correct;
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer('');
    setCurrentQuiz(currentQuiz + 1);
  };

  const restartQuiz = () => {
    setCurrentQuiz(0);
    setScore(0);
    setSelectedAnswer('');
  };

  if (currentQuiz >= quizData.length) {
    return (
      <div className=" flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            You answered correctly at {score}/{quizData.length} questions
          </h2>
          <button
            className="text-white bg-gradient-to-bl  from-deep-blue via-darker-blue via-blue to-medium-blue px-7 py-3 rounded-full text-sm font-medium"
            onClick={restartQuiz}
          >
            Restart
          </button>
        </div>
      </div>
    );
  }


  return (
    <div className=" flex items-center justify-center">
    
    <div className="bg-white p-8 rounded shadow-md ">
    <h1 className='font-bold text-3xl text-center mb-4'>Quiz 📌</h1>
      <h2 className="text-xl font-bold mb-4">{quizData[currentQuiz].question}</h2>
      <ul>
        {['a', 'b', 'c', 'd'].map((option) => (
          <li key={option} className="mb-2">
            <input
              type="radio"
              name="answer"
              id={option}
              className="mr-2"
              checked={selectedAnswer === option}
              onChange={() => handleAnswerSelection(option)}
            />
            <label htmlFor={option}>{quizData[currentQuiz][option]}</label>
          </li>
        ))}
      </ul>
      <button
        className="text-white bg-gradient-to-bl  from-deep-blue via-darker-blue via-blue to-medium-blue px-7 py-3 rounded-full text-sm font-medium"
        onClick={handleNextQuestion}
      >
        Next
      </button>
    </div>
  </div>
);
};


export default Task;
