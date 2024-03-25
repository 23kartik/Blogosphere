import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const AuthModal = ({ closeModal }) => {
  const [isSignup, setIsSignup] = useState(false);

  const handleToggle = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="z-50 bg-white-100 rounded-lg p-8 max-w-md relative">
        {/* Close button */}
        <button className="absolute top-0 right-0 mr-2 mt-2 text-gray-600 hover:text-gray-900" onClick={closeModal}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* Content based on isSignup state */}
        {isSignup ? (
          <SignUp toggle={handleToggle} />
        ) : (
          <SignIn toggle={handleToggle} />
        )}

      </div>
    </div>
  );
};

export default AuthModal;
