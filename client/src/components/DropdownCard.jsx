import React from 'react';
import { useNavigate } from 'react-router-dom';

const DropdownCard = ({ user,onLogout}) => {

    const navigate=useNavigate();


  const handleSignOut = () => {
    onLogout();
    navigate('/')
    
  };

const handleClick = (option) => {
  switch(option) {
    case 'write':
        navigate('/write')
      break;
    case 'profile':
      navigate('/profile')
      break;
    case 'saved':
      navigate('/saved')
      break;
    case 'activity':
      navigate('/activity')
      break;
    case 'library':
      navigate('/library')
      break;
  }
};

  return (
    <div className="absolute mt-[32rem] right-0 mr-4 bg-white-100 rounded-lg shadow-lg">
      <div className="p-4 m-4 flex  items-center">
        <img src={user.imageUrl} alt="Profile" className="h-12 w-12 rounded-full mr-4 cursor-pointer" />
        <div>
          <p className="text-gray-800 font-bold">{user.name.toUpperCase()}</p>
        <p className="text-gray-600">@{user.email.split('@')[0]}</p>
        </div>
      </div>
      <hr className="border-t border-gray-400" />
      <div className="">
  <div className="py-4 px-6 cursor-pointer hover:bg-gray-200 rounded-md transition-colors duration-300" onClick={()=>handleClick('write')}>Write</div>
  <hr className="border-t border-gray-400" />
  <div className="py-4 px-6  cursor-pointer hover:bg-gray-200 rounded-md transition-colors duration-300" onClick={()=>handleClick('profile')}>Profile</div>
  <div className="py-4 px-6  cursor-pointer hover:bg-gray-200 rounded-md transition-colors duration-300" onClick={()=>handleClick('saved')}>Saved</div>
    <div className="py-4 px-6  cursor-pointer hover:bg-gray-200 rounded-md transition-colors duration-300" onClick={()=>handleClick('activity')}>Activity</div>
    <div className="py-4 px-6  cursor-pointer hover:bg-gray-200 rounded-md transition-colors duration-300" onClick={()=>handleClick('library')}>Library</div>
    <hr className="border-t border-gray-400" />
    <div className="py-4 px-6 cursor-pointer hover:bg-gray-200 rounded-md transition-colors duration-300" onClick={handleSignOut}>Sign out</div>
</div>

    </div>
  );
};

export default DropdownCard;
