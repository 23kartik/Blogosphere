import React, { useState } from 'react';
import AuthModal from './AuthModal'; // Assuming you have AuthModal component in AuthModal.js file

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
   
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between bg-gray-800 p-6">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl">Your Logo</span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center ">
          {/* Our Story */}
          <div className="text-sm text-white mr-4 cursor-pointer hover:text-gray-300">Our Story</div>

          {/* Get Started Button */}
          <button onClick={toggleModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </nav>

      {/* Render AuthModal if isModalOpen is true */}
      {isModalOpen && <AuthModal closeModal={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Navbar;
