import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link, useLocation } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import You from './You';
import './NavBar.css'

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user)
  const prevLocation = useLocation();

  const sessionLinks = sessionUser && (
    <div className='profile-button-div'>
      <ProfileButton user={sessionUser} className='ProfileButton' />
    </div>
  )

  const exploreLink = sessionUser && (
    <div className='explore-link-navbar'>
      <Link to='/photos' className='left-side-links-navbar'>Photos</Link>
      <div className='you-dropdown-div-navbar'>
        <You user={sessionUser} />
      </div>
    </div>
  )

  const navRightSide = sessionUser ? (
    <div className='div-for-profile-button-and-upload'>
      <span>
        <NavLink className='links-on-nav-bar' to='/upload' exact activeClassName='active'>
          <div className='upload-icon-navbar'>
            <img src="https://d3a5ukb11xbbmk.cloudfront.net/upload.png" className='upload-navbar' alt='upload' />
          </div>
        </NavLink>
      </span>
      {sessionLinks}
    </div>
  ) : (
    <>
      <span>
        <NavLink className='links-on-nav-bar' to='/photos' exact activeClassName='active'>
          Photos
        </NavLink>
      </span>
      <span>
        <NavLink className='links-on-nav-bar' to={`/login?redirectTo=${prevLocation.pathname}`} exact activeClassName='active'>
          Log in
        </NavLink>
      </span>
      <span>
        <NavLink className='link-for-signup' to={`/sign-up?redirectTo=${prevLocation.pathname}`} exact activeClassName='active'>
          <span className='sign-up-navbar-text'>
            Sign Up
          </span>
        </NavLink>
      </span>
    </>
  )

  return (
    <div className='whole-nav-bar'>
      <nav>
        <div className='navbar-main-container'>
          <div className='navbar-left-side'>
            <NavLink className='links-on-nav-bar' to='/' exact activeClassName='active'>
              <div className='container-for-right-navbar-links'>
                <img src="https://cdn-icons-png.flaticon.com/128/174/174849.png" className='logo-navbar' alt='logo' />
                <div className='container-for-name'>
                  <span className='site-name-navbar'>picshr</span>
                </div>
              </div>
            </NavLink>
            {exploreLink}
          </div>
          <div className='navbar-right-side'>
            {navRightSide}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
