import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 flex flex-col justify-between">
      {/* Image section */}
      <div className="h-48 flex justify-center items-center">
        <img src={image} alt={name} className="h-40 bg-cover" />
      </div>

      {/* Product Info */}
      <div className="p-4 flex-grow flex flex-col justify-between">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>

        {/* Add more description here if needed */}
        <p className="text-gray-700 mb-4">${price}</p>

        {/* Button Section */}
        <div className="mt-auto">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition flex items-center w-full justify-center">
            <FiShoppingCart className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
