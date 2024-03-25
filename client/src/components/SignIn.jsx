// SignIn.js
import React, { useState, useEffect } from 'react';
import  GoogleLogin  from 'react-google-login';
import { useNavigate } from 'react-router-dom';


const SignIn = ({ toggle }) => {
   const navigate = useNavigate();
  const [email, setEmail]=useState('');
   const [password, setPassword]=useState('');
   const clientId = process.env.REACT_APP_CLIENT_ID;


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login
  };
  
const handleSuccess=(res)=>{
  console.log("Login success",res.profileObj);
  navigate('/home')
}

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold mb-4">Sign In</h2>
      <div className="mb-4">
        <input type="email" placeholder="Email" className="w-full border p-2" />
      </div>
      <div className="mb-4">
        <input type="password" placeholder="Password" className="w-full border p-2" />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Sign In</button>
      <p className="mt-4">New to Blogosphere? <span className="text-blue-500 cursor-pointer" onClick={toggle}>SignUp</span></p>
    </form>
    <div className="flex items-center my-4">
                          <div className="border-t border-gray-400 w-full"></div>
                          <span className="mx-4 text-gray-600">OR</span>
                          <div className="border-t border-gray-400 w-full"></div>
                        </div>
                        {/* Google Sign-in */}
                        <GoogleLogin 
                        clientId={clientId}
                        buttonText='SignIn with Google'
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                        onSuccess={handleSuccess}
                        />
                          
    </div>
  );
};

export default SignIn;
