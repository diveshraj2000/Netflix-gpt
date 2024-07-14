import React from 'react';
import useIcon from '../assets/download.png';
import { signOut } from 'firebase/auth';
import { auth } from '../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { logo } from '../Utils/constant';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import { useEffect } from 'react';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const user=useSelector((store)=>store.user)
  const user = useSelector((store) => store.user);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate('/browse');
        // ...
      } else {
        dispatch(removeUser());
        navigate('/');
        // User is signed out
        // ...
      }
    });
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate('/');
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="px-8 py-2 absolute bg-gradient-to-b from-black z-10   flex justify-between w-full">
      <img className=" h-16" src={logo} alt="logo" />
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
