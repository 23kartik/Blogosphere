import React, { useState, useEffect } from 'react';
import AuthModal from './AuthModal'; // Assuming you have AuthModal component in AuthModal.js file
import { useNavigate } from 'react-router-dom';
import DropdownCard from './DropdownCard';

const Navbar = ({ user, setUser, onLogout}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const navigate=useNavigate();
  const toggleModal = () => {
   
    setIsModalOpen(!isModalOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


   useEffect(() => {
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        setUser(JSON.parse(storedUserData));
        navigate('/home');
      }
    }, []);

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
    
              {/* Conditionally render "Get Started" button or user's profile image */}
              {user ? (
                <div className="flex items-center">
                  <img src={user.imageUrl} alt="Profile" className="h-10 w-10  rounded-full mr-8 cursor-pointer" onClick={toggleDropdown} />
                  {isDropdownOpen &&(
                  
                        
                      <DropdownCard user={user} onLogout={onLogout}/>
                    
                  )}
                </div>
              ) : (
                <button onClick={toggleModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Get Started
                </button>
              )}
            </div>
          </nav>
    
        
          {isModalOpen && <AuthModal closeModal={() => setIsModalOpen(false)} />}
        </>
  );
};

export default Navbar;
