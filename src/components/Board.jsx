import { useState } from "react";
import { calculateWinner } from "../utility/calculateWinner";
import Square from "./Square";

const Board = () => {
   const [squares, setSquares] = useState(Array(9).fill(null));
   const [turn, setTurn] = useState("X");

   const winner = calculateWinner(squares);
   let status;

   if (winner) {
      status = `Winner: ${winner}`;
   } else {
      status = `Next Turn: ${turn}`;
   }

   const handleClick = (idx) => {
      if (winner || squares[idx]) {
         return;
      }

      const nextSquare = [...squares];
      const nextTurn = turn;

      nextSquare[idx] = nextTurn;
      setTurn(turn === "X" ? "O" : "X");
      setSquares(nextSquare);
   };

   return (
      <>
         <div>{status}</div>
         <div className="flex">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
         </div>
         <div className="flex">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
         </div>
         <div className="flex">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
         </div>
      </>
   );
};

export default Board;
