import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="border-t-4 border-gray-300 rounded-full animate-spin h-7 w-7"></div>
    </div>
  );
};

export default Spinner;
