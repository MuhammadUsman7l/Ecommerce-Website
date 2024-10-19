import React from "react";
import { FiSearch } from "react-icons/fi";

const ProductCategories = ({ title }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 flex flex-col justify-between">
      {/* Titie section */}
      <div className="flex justify-center text-center pt-5">
        <h1 className="text-orange-700 text-3xl font-bold">{title}</h1>
      </div>

      {/* Description section
      <div className="flex flex-col px-4 pt-5">
        {sub.map((s, index) => (
          <h1 key={index} className="text-gray-700 text-base font-normal">
            {s}
          </h1>
        ))}
      </div> */}

      {/* Button Section */}
      <div className="w-full p-5">
        <button className="bg-orange-700 text-white px-4 py-2 rounded-xl hover:bg-white hover:text-orange-700 hover:border-2 hover:border-orange-700 transition flex items-center justify-center w-full">
          Explore Now
          <FiSearch className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ProductCategories;
