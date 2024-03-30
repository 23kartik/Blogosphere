import React, { useState,useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'; 

import Navbar from './components/Navbar'
import Home from './components/Home';
import { gapi } from 'gapi-script';
import Basic from './components/Basic';
import Write from './components/Write';
import Activity from './components/Activity';
import Profile from './components/Profile';
import Saved from './components/Saved';
import Library from './components/Library';

const App = () => {
   const clientId = process.env.REACT_APP_CLIENT_ID;
     const [user, setUser] = useState(null);

       const handleLogout = () => {

         setUser(null);
         localStorage.removeItem('userData');
  
     
      
       };
useEffect(()=>{
function start(){
    gapi.client.init({
      clientId:clientId,
      scope:""
    })
  };
  gapi.load('client:auth2',start)
})

  return (
    <div>
      <Navbar user={user} setUser={setUser} onLogout={handleLogout}/>
       <Routes>
         <Route path="/" element={<Basic />} />
         <Route path="/home" element={<Home />} />
         <Route path="/write" element={<Write />} />
         <Route path="/activity" element={<Activity />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/saved" element={<Saved />} />
          <Route path="/library" element={<Library />} />
                 
                </Routes>
    </div>
  )
}

export default App