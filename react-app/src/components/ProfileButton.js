import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoutButton from '../components/auth/LogoutButton'


function ProfileButton({ user, setLogin, setShowModal }) {

    const [showMenu, setShowMenu] = useState(false);


    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);



    return (
        <>
            <div className="profile-button-actual-div">
                <img onClick={openMenu} className="nav-bar-profile-picture" src="https://cdn-icons-png.flaticon.com/512/2983/2983067.png" alt='DefaultPic' />
            </div>
            {showMenu && (user ?
                (<div className="adjustment-for-profile-dropdown">

                    < div className="profile-dropdown">
                        <div className="hello-user-navbar">
                            <span></span>
                            <Link to={`/people/${user.id}/photostream`} className="username"> {user.username}</Link>
                        </div>
                        <span>
                            <LogoutButton />
                        </span>
                    </div>
                </div>) :
                (<ul className="profile-dropdown">
                    <button
                        className="logout"
                        onClick={() => {
                            setLogin(true)
                            setShowModal(true)
                        }}>Log In</button>

                    <button
                        className="logout"
                        onClick={() => {

                            setLogin(false)
                            setShowModal(true)
                        }}>
                        Sign Up
                    </button>
                </ul>)
            )
            }
        </>
    );
}

export default ProfileButton;
