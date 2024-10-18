import React from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
          {/* Links Section */}
          <div className="flex-1 mb-6">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="flex-1 mb-6">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">
              Subscribe to our newsletter to get the latest updates and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow p-2 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 p-2 rounded-r-md hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Section */}
          <div className="flex-1 mb-6">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition">
                <FiFacebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <FiTwitter size={24} />
              </a>
              <a href="#" className="hover:text-pink-500 transition">
                <FiInstagram size={24} />
              </a>
              <a href="#" className="hover:text-blue-800 transition">
                <FiLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
