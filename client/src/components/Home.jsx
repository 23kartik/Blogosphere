import React, { useEffect } from 'react'

const Home = () => {

    useEffect(()=>{

    window.history.replaceState({}, document.title, window.location.href.split("#")[0].split("?")[0]);

    },[]);
  return (
    <div>Home</div>
  )
}

export default Home