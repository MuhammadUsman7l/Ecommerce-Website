import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-700 mb-4">${product.price.toFixed(2)}</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition flex items-center">
            <FiShoppingCart className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
