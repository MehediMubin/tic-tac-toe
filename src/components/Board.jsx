import { useState } from "react";
import calculateWinner from "../utils/calculateWinner";
import Square from "./Square";
const Board = () => {
   const [isX, setIsX] = useState(true);
   const [squares, setSquares] = useState(Array(9).fill(null));

   const winner = calculateWinner(squares);

   const handleClick = (idx) => {
      if (squares[idx] || winner) {
         return;
      }
      const newSquare = [...squares];
      if (isX) {
         newSquare[idx] = "X";
      } else {
         newSquare[idx] = "O";
      }
      setSquares(newSquare);
      setIsX(!isX);
   };

   return (
      <>
         {winner ? (
            <h1 className="text-xl mb-2 text-red-500 tracking-wide">
               Winner is {winner}
            </h1>
         ) : (
            <h1 className="text-xl mb-2 text-red-500 tracking-wide">{`Next move: ${
               isX ? "X" : "O"
            }`}</h1>
         )}

         <div className="flex">
            <Square value={squares[0]} handleClick={() => handleClick(0)} />
            <Square value={squares[1]} handleClick={() => handleClick(1)} />
            <Square value={squares[2]} handleClick={() => handleClick(2)} />
         </div>
         <div className="flex">
            <Square value={squares[3]} handleClick={() => handleClick(3)} />
            <Square value={squares[4]} handleClick={() => handleClick(4)} />
            <Square value={squares[5]} handleClick={() => handleClick(5)} />
         </div>
         <div className="flex">
            <Square value={squares[6]} handleClick={() => handleClick(6)} />
            <Square value={squares[7]} handleClick={() => handleClick(7)} />
            <Square value={squares[8]} handleClick={() => handleClick(8)} />
         </div>
      </>
   );
};

export default Board;
