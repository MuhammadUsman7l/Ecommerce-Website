import React, { useState, useEffect } from "react";
import { LoadingSpinner, ProductCategories, Error } from "../components";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { hero1, hero2, hero3, hero4, hero5, hero6, hero7 } from "../images";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, fetchMenProducts } from "../redux/productSlice";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const slides = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];
  const navigate = useNavigate();

  const handleClick = (categoryValue) => {
    dispatch(fetchMenProducts(categoryValue));
    navigate(`/category/${categoryValue}`);
  };
  const dispatch = useDispatch();
  const {
    data: products,
    loading,
    error,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="max-w-[1400px] h-[780px] w-full m-auto p-2 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex]})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex-col justify-center items-center text-white hidden lg:flex">
            <h1 className="text-4xl font-extrabold mb-4">
              <span className="text-orange-700">Discover Yo</span>
              <span className="text-yellow-500">ur Style, Elevate Yo</span>
              <span className="text-blue-700">ur Wardrobe</span>
            </h1>
            <h1 className="text-2xl font-bold mb-4">
              Shop the Latest Trends, Anytime, Anywhere
            </h1>
            <h1 className="text-xl font-semibold mb-4">
              Unbeatable Prices, Unmatched Quality
            </h1>
            <button className="px-8 py-4 bg-orange-700 text-white rounded-3xl hover:bg-white hover:text-orange-700 hover:font-extrabold">
              Shop Now
            </button>
          </div>

          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white lg:hidden">
            <h1 className="text-xl font-bold mb-4">
              <span className="text-orange-700">Discover Yo</span>
              <span className="text-yellow-500">ur Style, Elevate Yo</span>
              <span className="text-blue-700">ur Wardrobe</span>
            </h1>
            <h1 className="text-lg font-semibold mb-4">
              Shop the Latest Trends, Anytime, Anywhere
            </h1>
            <h1 className="text-base font-normal mb-4">
              Unbeatable Prices, Unmatched Quality
            </h1>
            <button className="px-8 py-4 bg-orange-700 text-white rounded-3xl hover:bg-white hover:text-orange-700 hover:font-extrabold">
              Shop Now
            </button>
          </div>
        </div>

        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      {/* Featured Products Section */}
      {loading ? (
        <div className="flex items-center justify-center py-10">
          <LoadingSpinner />{" "}
        </div>
      ) : error ? (
        <div className="flex items-center justify-center py-10">
          <Error message={error} />{" "}
        </div>
      ) : (
        <div className="container mx-auto py-10">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Product Catagories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCategories
                key={index}
                title={product.CatName}
                onClick={() => handleClick(product.CategoryValue)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
