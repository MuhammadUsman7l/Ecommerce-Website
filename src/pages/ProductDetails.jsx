import React, { useEffect } from "react";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "../redux/productSlice"; // Update as needed
import { useParams } from "react-router-dom";
import { LoadingSpinner, Error } from "../components"; // Assuming you have these components

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { code } = useParams(); // Assuming code is passed in the URL
  const {
    loading,
    error,
    data: product,
  } = useSelector((state) => state.products);

  useEffect(() => {
    if (code) {
      dispatch(fetchProductDetails(code)); // Fetch product details based on code
    }
  }, [dispatch, code]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Error message={error} />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>No product details available.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4 lg:px-16">
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        {/* <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <div className="mb-4">
            <img
              src={product.images[0]?.baseUrl}
              alt={product.name}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div> */}

        {/* Product Info Section */}
        <div className="w-full lg:w-1/2 lg:pl-16">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-gray-600 text-lg mt-2">
            <span className="font-semibold">Production Year:</span>{" "}
            {product.yearOfProduction}
          </p>
          <p className="text-gray-600 text-lg">
            <span className="font-semibold">Colors Available:</span>{" "}
            {product.color.text}
          </p>
          <p className="text-gray-600 text-lg">
            <span className="font-semibold">Customer Type:</span>{" "}
            {product.ageGender}
          </p>
          <p className="text-gray-600 text-lg">
            <span className="font-semibold">Production Country:</span>{" "}
            {product.productCountryOfProduction}
          </p>
          <p className="text-orange-700 text-2xl font-semibold mt-4">
            Price: ${product.whitePrice.price}
          </p>

          {/* Product Description */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Product Description</h3>
            <p className="text-gray-700">{product.description}</p>
          </div>

          {/* Add to Cart & Wishlist Button */}
          <div className="mt-8 flex space-x-4">
            <button className="bg-orange-700 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-orange-700 hover:border-2 hover:border-orange-700 transition flex items-center justify-center">
              <FiShoppingCart className="mr-2" />
              Add to Cart
            </button>

            <button className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition flex items-center justify-center">
              <FiHeart className="mr-2" />
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
