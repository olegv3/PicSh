import React from 'react';
import { useHistory } from 'react-router-dom';
import './LogoutButton.css'


const LogoutButton = () => {
  const history = useHistory();
  const onLogout = (e) => {

    return history.push('/logout-confirm')

  };


  return <button className='logout-button' onClick={onLogout}>Logout</button>;

};


export default LogoutButton;
