import React from 'react';
import useIcon from '../assets/download.png';
import { signOut } from 'firebase/auth';
import { auth } from '../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const navigate = useNavigate();
  // const user=useSelector((store)=>store.user)
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="px-8 py-2 absolute bg-gradient-to-b from-black z-10   flex justify-between w-full">
      <img
        className=" h-16"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex h-12">
          <span>{user?.displayName}</span>
          <img src={useIcon} alt="profile icon" />
          <button onClick={handleSignOut} className="text-xl  text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
