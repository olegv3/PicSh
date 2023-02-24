import React from 'react';
import { useHistory } from 'react-router-dom';
import './LogoutButton.css'


const LogoutButton = () => {
  const history = useHistory();
  const onLogout = (e) => {

    return history.push('/logout-confirm')

  };

  // return <div className='logout-button-div-navbar'><button className='logout-button-navbar' onClick={onLogout}>Logout</button></div>
  return <button className='logout-button' onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
