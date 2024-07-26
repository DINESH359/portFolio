import React, { useState } from 'react';
import Board from './Board';
import './TicTacToe.css';

const Game = () => {
  const [player1, setPlayer1] = useState('Player 1');
  const [player2, setPlayer2] = useState('Player 2');
  const [xIsNext, setXIsNext] = useState(true);

  const handleNameChange = (event) => {
    const { name, value } = event.target;
    if (name === 'player1') {
      setPlayer1(value);
    } else {
      setPlayer2(value);
    }
  };

  const resetGame = () => {
    setXIsNext(true);
  };

  return (
    <div className="game">
      <div>
        <input
          name="player1"
          type="text"
          placeholder="Player 1"
          value={player1}
          onChange={handleNameChange}
        />
        <input
          name="player2"
          type="text"
          placeholder="Player 2"
          value={player2}
          onChange={handleNameChange}
        />
      </div>
      <button onClick={resetGame}>Reset Game</button>
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          setXIsNext={setXIsNext}
          player1={player1}
          player2={player2}
        />
      </div>
    </div>
  );
};

export default Game;
