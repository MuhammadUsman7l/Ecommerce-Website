import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ image, brandname, name, price, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 flex flex-col justify-between"
      onClick={onClick}
    >
      {/* Image section */}
      <div className="h-48 flex justify-center items-center">
        <div className="w-48 h-full flex justify-center items-center">
          <img
            src={image}
            alt={name}
            className="h-full object-contain rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col h-full justify-between">
        <h3 className="text-lg font-semibold mb-2">
          <span className="text-orange-700">Product Name : </span>
          {name}
        </h3>
        <h3 className="text-lg font-semibold mb-2">
          <span className="text-orange-700">Brand Name : </span>
          {brandname}
        </h3>

        {/* Price Section */}
        <div className="mt-auto">
          <p className=" text-xl font-bold mb-4">
            <span className="text-orange-700">Product Price : </span>${price}
          </p>
        </div>

        {/* Button Section */}
        <div className="w-full">
          <button className="bg-orange-700 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-orange-700 hover:border-2 hover:border-orange-700 transition flex items-center justify-center w-full">
            <FiShoppingCart className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
