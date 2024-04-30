import React, { useState } from 'react';

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [status, setStatus] = useState("In progress");

  const handleSquareClick = (index) => {
    if (board[index] || status !== "In progress") {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    updateStatus(newBoard);
  };

  const updateStatus = (newBoard) => {
    const winner = calculateWinner(newBoard);
    if (winner) {
      setStatus(`${winner} wins!`);
    } else if (newBoard.every(Boolean)) {
      setStatus("Draw");
    } else {
      setStatus("In progress");
    }
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setStatus("In progress");
  };

  const renderSquare = (index) => (
    <button
      className="w-24 h-24 bg-white border-2 border-gray-300 font-bold text-xl text-gray-800 flex items-center justify-center hover:bg-gray-100 focus:outline-none"
      onClick={() => handleSquareClick(index)}>
      {board[index]}
    </button>
  );
  return (
    <div className="flex flex-col items-center justify-center mt-10">
    <h1 className="text-3xl font-bold mb-4">Tic Tac Toe 🎲</h1>
    <div className="grid grid-cols-3 gap-1">
      {Array.from({ length: 9 }).map((_, index) => renderSquare(index))}
    </div>
    <div className="mt-4">
      <p className="text-lg">{status}</p>
      <button
        className="text-white bg-gradient-to-bl  from-deep-blue via-darker-blue via-blue to-medium-blue px-7 py-3 rounded-full text-sm font-medium"
        onClick={handleRestart}>
        RESTART
      </button>
    </div>
  </div>
  );
}
