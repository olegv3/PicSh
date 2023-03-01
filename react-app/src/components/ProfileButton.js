import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import LogoutButton from '../components/auth/LogoutButton'

function ProfileButton({ user, setLogin, setShowModal }) {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showMenu]);

  const handleButtonClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="profile-button-actual-div" ref={ref}>
        <img
          onClick={handleButtonClick}
          className="nav-bar-profile-picture"
          src="https://cdn-icons-png.flaticon.com/512/2983/2983067.png"
          alt="DefaultPic"
        />
      </div>
      {showMenu && (
        <div className="adjustment-for-profile-dropdown">
          {user ? (
            <div className="profile-dropdown">
              <div className="hello-user-navbar">
                <span></span>
                <Link to={`/people/${user.id}/photostream`} className="username">
                  {user.username}
                </Link>
              </div>
              <span>
                <LogoutButton />
              </span>
            </div>
          ) : (
            <ul className="profile-dropdown">
              <button
                className="logout"
                onClick={() => {
                  setLogin(true);
                  setShowModal(true);
                }}
              >
                Log In
              </button>

              <button
                className="logout"
                onClick={() => {
                  setLogin(false);
                  setShowModal(true);
                }}
              >
                Sign Up
              </button>
            </ul>
          )}
        </div>
      )}
    </>
  );
}

export default ProfileButton;
