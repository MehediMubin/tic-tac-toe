import { useState } from "react";
import Square from "./Square";

const Board = () => {
   const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = () => {
    setSquares([...squares, ])
  }

   return (
      <>
         <div className="flex">
            <Square value={squares[0]} onSquareClick={handleClick}/>
            <Square value={squares[1]} onSquareClick={handleClick}/>
            <Square value={squares[2]} onSquareClick={handleClick}/>
         </div>
         <div className="flex">
            <Square value={squares[3]} onSquareClick={handleClick}/>
            <Square value={squares[4]} onSquareClick={handleClick}/>
            <Square value={squares[5]} onSquareClick={handleClick}/>
         </div>
         <div className="flex">
            <Square value={squares[6]} onSquareClick={handleClick}/>
            <Square value={squares[7]} onSquareClick={handleClick}/>
            <Square value={squares[8]} onSquareClick={handleClick}/>
         </div>
      </>
   );
};

export default Board;
