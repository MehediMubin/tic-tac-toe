/* eslint-disable react/prop-types */

const Square = ({ value, handleClick }) => {
  //  console.log(value);
  //  console.log(handleClick);
   return (
      <button
         onClick={handleClick}
         className="w-14 h-14 border border-gray-700 m-1 text-lg"
      >
         {value}
      </button>
   );
};

export default Square;
