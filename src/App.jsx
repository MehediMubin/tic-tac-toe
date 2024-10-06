import { useState } from "react";
import Board from "./components/Board";
import History from "./components/History";
import calculateWinner from "./utils/calculateWinner";

const Game = () => {
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
      <div className="border border-dashed border-red-500 w-1/2 mx-auto mt-10 p-10">
         {winner ? (
            <h1 className="text-xl mb-2 text-red-500 tracking-wide">
               Winner: {winner}
            </h1>
         ) : (
            <h1 className="text-xl mb-2 text-red-500 tracking-wide">{`Next move: ${
               isX ? "X" : "O"
            }`}</h1>
         )}
         <div>
            <Board squares={squares} handleClick={handleClick} />
            <History move={1} />
         </div>
      </div>
   );
};

export default Game;
