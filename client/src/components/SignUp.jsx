// SignUp.js
import React, { useState, useEffect } from 'react';
import  GoogleLogin  from 'react-google-login';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ toggle }) => {
      const navigate = useNavigate();
      const [firstName, setFirstName]=useState('');
      const [lastName, setLastName]=useState('');
      const [email, setEmail]=useState('');
      const [password, setPassword]=useState('');
        const clientId = process.env.REACT_APP_CLIENT_ID;
    //   const navigate =useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign up
  };
const handleSuccess=()=>{
      console.log("kkk")
    navigate('/home')
}
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold mb-4">Sign Up</h2>
      <div className="mb-4">
        <input type="text" placeholder="First Name" className="w-full border p-2" />
      </div>
      <div className="mb-4">
        <input type="text" placeholder="Last Name" className="w-full border p-2" />
      </div>
      <div className="mb-4">
        <input type="email" placeholder="Email" className="w-full border p-2" />
      </div>
      <div className="mb-4">
        <input type="password" placeholder="Password" className="w-full border p-2" />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Sign Up</button>
      <p className="mt-4">Already have an account? <span className="text-blue-500 cursor-pointer" onClick={toggle}>Sign In</span></p>
    </form>
             <div className="flex items-center my-4">
                      <div className="border-t border-gray-400 w-full"></div>
                      <span className="mx-4 text-gray-600">OR</span>
                      <div className="border-t border-gray-400 w-full"></div>
                    </div>
                    {/* Google Sign-in */}
                   <GoogleLogin 
                    clientId={clientId}      
                    buttonText='SignUp with Google'
                   
                    isSignedIn={true}
                    onSuccess={handleSuccess}
                  />
    </div>
  );
};

export default SignUp;
