import React, { useState, useEffect } from 'react';
import Square from './Square';
import './TicTacToe.css';

const Board = ({ xIsNext, setXIsNext, player1, player2 }) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setSquares(Array(9).fill(null));
    setGameOver(false);
  }, [xIsNext, player1, player2]);

  const handleClick = (index) => {
    if (calculateWinner(squares) || squares[index] || gameOver) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);

    if (calculateWinner(newSquares) || newSquares.every(square => square !== null)) {
      setGameOver(true);
    }
  };

  const renderSquare = (index) => {
    return <Square value={squares[index]} onClick={() => handleClick(index)} />;
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner === 'X' ? player1 : player2}`
    : gameOver
    ? 'Draw! Click reset to play again.'
    : `Next player: ${xIsNext ? player1 : player2}`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
