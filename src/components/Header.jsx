import React, { useState } from "react";
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
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);

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
            <a href="#" className="text-gray-600 hover:text-orange-600">
              Home
            </a>

            {/* Dropdown Menu for Categories with Dropdown Icon */}
            <div className="relative group">
              <a
                href="#"
                className="text-gray-600 hover:text-orange-600 flex items-center"
              >
                Categories
                <FiChevronDown className="ml-1 mt-1" /> {/* Dropdown icon */}
              </a>

              {/* Dropdown Content with Hover Fix */}
              <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg border mt-2 w-48 text-gray-700 transition-opacity ease-in-out opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                <a href="#" className="px-4 py-2 hover:bg-gray-100">
                  Electronics
                </a>
                <a href="#" className="px-4 py-2 hover:bg-gray-100">
                  Clothing
                </a>
                <a href="#" className="px-4 py-2 hover:bg-gray-100">
                  Home Appliances
                </a>
                <a href="#" className="px-4 py-2 hover:bg-gray-100">
                  Sports
                </a>
                <a href="#" className="px-4 py-2 hover:bg-gray-100">
                  Beauty & Health
                </a>
              </div>
            </div>

            <a href="#" className="text-gray-600 hover:text-orange-600">
              Sale
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-600">
              Contact
            </a>

            {/* Wishlist Icon */}
            <a href="#" className="relative">
              <FiHeart className="text-gray-600 hover:text-orange-600 text-xl" />
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
                3
              </span>
            </a>

            {/* User Profile Icon */}
            <a href="#" className="text-gray-600 hover:text-orange-600 text-xl">
              <FiUser />
            </a>

            {/* Cart Icon */}
            <a href="#" className="relative">
              <FiShoppingCart className="text-gray-600 hover:text-orange-600 text-xl" />
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
                2
              </span>
            </a>
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
              <a href="#" className="text-gray-600 hover:text-orange-600">
                Home
              </a>

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
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-600 hover:text-orange-600"
                    >
                      Electronics
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-600 hover:text-orange-600"
                    >
                      Clothing
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-600 hover:text-orange-600"
                    >
                      Home Appliances
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-600 hover:text-orange-600"
                    >
                      Sports
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-600 hover:text-orange-600"
                    >
                      Beauty & Health
                    </a>
                  </div>
                )}
              </div>

              <a href="#" className="text-gray-600 hover:text-orange-600">
                Sale
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-600">
                Contact
              </a>

              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-orange-600">
                  <FiHeart />
                </a>
                <a href="#" className="text-gray-600 hover:text-orange-600">
                  <FiUser />
                </a>
                <a href="#" className="text-gray-600 hover:text-orange-600">
                  <FiShoppingCart />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
