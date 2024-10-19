import React, { useCallback, useState } from "react";
import {
  FiShoppingCart,
  FiHeart,
  FiUser,
  FiSearch,
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";
import image from "../images/logo.webp";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchMenProducts } from "../redux/productSlice";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCategoryClick = useCallback(
    (category) => {
      dispatch(fetchMenProducts(category));
      navigate(`/category/${category}`);
    },
    [dispatch, navigate]
  );

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo with Image */}
          <div className="flex h-full items-center">
            <img src={image} alt="Shop Logo" className="h-10 w-auto" />
            <span className="text-2xl  font-extrabold shadow-sm">
              <span className="text-orange-700">Swi</span>
              <span className="text-yellow-500">ftM</span>
              <span className="text-blue-700">art</span>
            </span>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/2">
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent flex-grow focus:outline-none"
            />
            <FiSearch className="text-gray-500" />
          </div>

          {/* Desktop Navigation & Icons */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-orange-600">
              Home
            </Link>

            {/* Dropdown Menu for Categories with Dropdown Icon */}
            <div className="relative group">
              <a className="text-gray-600 hover:text-orange-600 flex items-center cursor-pointer p-3">
                Categories
                <FiChevronDown className="ml-1 mt-1" />
              </a>

              {/* Dropdown Content with Hover Fix */}
              <div className="absolute hidden group-hover:flex flex-col bg-white rounded-md shadow-lg border w-48 text-gray-700 transition-opacity ease-in-out opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    handleCategoryClick("men");
                  }}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  Men
                </Link>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    handleCategoryClick("ladies");
                  }}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  Women
                </Link>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    handleCategoryClick("baby");
                  }}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  Baby
                </Link>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    handleCategoryClick("kids");
                  }}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  Kids
                </Link>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    handleCategoryClick("home");
                  }}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  Home
                </Link>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    handleCategoryClick("beauty");
                  }}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  Beauty
                </Link>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    handleCategoryClick("sport");
                  }}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  Sports
                </Link>
              </div>
            </div>

            <Link
              onClick={(e) => {
                e.preventDefault();
                handleCategoryClick("sale");
              }}
              className="text-gray-600 hover:text-orange-600"
            >
              Sale
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-orange-600">
              Contact
            </Link>

            {/* Wishlist Icon */}
            <a href="#" className="relative">
              <FiHeart className="text-gray-600 hover:text-orange-600 text-xl" />
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
                3
              </span>
            </a>

            {/* User Profile Icon */}
            <Link
              to="/login"
              className="text-gray-600 hover:text-orange-600 text-xl"
            >
              <FiUser />
            </Link>

            {/* Cart Icon */}
            <Link to="/cart" className="relative">
              <FiShoppingCart className="text-gray-600 hover:text-orange-600 text-xl" />
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
                2
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <FiX className="text-2xl text-gray-600" />
              ) : (
                <FiMenu className="text-2xl text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-md fixed right-0 h-full z-10">
            <nav className="flex flex-col items-start space-y-4 px-8 py-4">
              <Link to="/" className="text-gray-600 hover:text-orange-600">
                Home
              </Link>

              {/* Mobile Dropdown for Categories */}
              <div className="flex flex-col">
                <button
                  className="flex items-start text-gray-600 hover:text-orange-600"
                  onClick={() => setMobileDropdownOpen(!isMobileDropdownOpen)}
                >
                  Categories
                  <FiChevronDown className="ml-20 mt-2" />
                </button>

                {/* Mobile Dropdown Content */}
                {isMobileDropdownOpen && (
                  <div className="flex flex-col items-start  text-gray-700 mt-2">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        handleCategoryClick("men");
                      }}
                      className="block px-4 py-2 text-gray-600 hover:text-orange-600"
                    >
                      Men
                    </Link>
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        handleCategoryClick("ladies");
                      }}
                      className="block px-4 py-2 text-gray-600 hover:text-orange-600"
                    >
                      Woman
                    </Link>
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        handleCategoryClick("baby");
                      }}
                      className="block px-4 py-2 text-gray-600 hover:text-orange-600"
                    >
                      Baby
                    </Link>
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        handleCategoryClick("kids");
                      }}
                      className="block px-4 py-2 text-gray-600 hover:text-orange-600"
                    >
                      Kids
                    </Link>
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        handleCategoryClick("home");
                      }}
                      className="block px-4 py-2 text-gray-600 hover:text-orange-600"
                    >
                      Home
                    </Link>
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        handleCategoryClick("beauty");
                      }}
                      className="block px-4 py-2 text-gray-600 hover:text-orange-600"
                    >
                      Beauty
                    </Link>
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        handleCategoryClick("sport");
                      }}
                      className="block px-4 py-2 text-gray-600 hover:text-orange-600"
                    >
                      Sports
                    </Link>
                  </div>
                )}
              </div>

              <Link
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick("sale");
                }}
                className="text-gray-600 hover:text-orange-600"
              >
                Sale
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-orange-600"
              >
                Contact
              </Link>

              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-orange-600">
                  <FiHeart />
                </a>
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-orange-600"
                >
                  <FiUser />
                </Link>
                <Link
                  to="/cart"
                  className="text-gray-600 hover:text-orange-600"
                >
                  <FiShoppingCart />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
