import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'; 

import Navbar from './components/Navbar'
import Home from './components/Home';
import { gapi } from 'gapi-script';

const App = () => {
   const clientId = process.env.REACT_APP_CLIENT_ID;
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
      <Navbar/>
       <Routes>
        
                <Route path="/home" element={<Home />} />
                 
                </Routes>
    </div>
  )
}

export default App