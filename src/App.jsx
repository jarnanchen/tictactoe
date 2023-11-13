/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css'

function Square({ value, onSquareClick }) {


  return <button className="square" onClick={onSquareClick} >{value}</button>
}

function Board() {

  const [squares, setSquares] = useState(Array(5).fill(null));
  const [isNext, setNext] = useState(true);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    isNext ? nextSquares[i] = "X" : nextSquares[i] = "O";
    setSquares(nextSquares);
    setNext(!isNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner is " + winner;
  } else if (squares.indexOf(null) > -1) {
    status = "Next Player is " + (isNext ? "X" : "O");
  } else {
    status = "No winner"
  }


  return (<div>
    <h3>{status}</h3>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
      <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
      <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
      <Square value={squares[5]} onSquareClick={() => handleClick(5)} />

    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
      <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
      <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
    </div>
  </div>)

}

function App() {
  const [xIsNext, setxNext] = useState(true);
  const [history, setHistory] = useState(Array(9).fill(null));
  const currentSquares = history[history.length - 1];

  function handlePlay() {

  }

  return <div className='gameBoard'> <Board xIsNext={xIsNext} squares={currentSquares}
    onPlay={handlePlay} /></div>
}



function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export default App