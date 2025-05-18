const Square = ({ value, onSquareClick }) => {
   return (
      <>
         <button
            className="bg-white border border-gray-400 text-lg h-12 w-12 m-1 leading-9"
            onClick={onSquareClick}
         >
            {value}
         </button>
      </>
   );
};

export default Square;
