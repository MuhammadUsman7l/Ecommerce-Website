import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // You can add functionality to send the form data to your server or API here.
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-5">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-orange-700 mb-10">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                placeholder="Your name"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                placeholder="Your email"
                required
              />
            </div>
          </div>

          {/* Subject Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
              placeholder="Subject"
              required
            />
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
              placeholder="Your message"
              rows="6"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-orange-700 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-orange-700 hover:border-2 hover:border-orange-700 transition-all flex items-center"
            >
              Send Message
              <FiSend className="ml-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
