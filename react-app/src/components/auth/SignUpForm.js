import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link, Redirect, useLocation } from 'react-router-dom';
import { signUp, login } from '../../store/session';
import './SignUpForm.css'


const letters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [formErrors, setFormErrors] = useState({})
  const [username, setUsername] = useState('');
  const [full_name, setFullName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [disable, setDisable] = useState(true)
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const prevLocation = (location.search.split('=')[1])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  useEffect(() => {
    if (errors.length > 0) setDisable(true)
    if (errors.length === 0 && username.length > 1 && password.length > 1 && full_name.length > 1 && repeatPassword.length > 1) setDisable(false)
  }, [errors, disable, username, password, repeatPassword, full_name])


  useEffect(() => {
    const errors = {}
    if (username.length < 3 && username.length > 0) errors.username = ("Username must be at least 3 characters or more.")
    if (username.length > 25) errors.username = ("Username is too long please make it less then 25 characters")
    if (password.length < 8 && password.length > 0) errors.password = ("Password must be at least 8 characters or more.")
    if (password !== repeatPassword && repeatPassword.length > 0) errors.repeatPassword = ("Password doesn't match.")
    if (full_name.length > 0 && !letters.includes(full_name[0])) errors.fullName = ('Please enter your name')
    if (full_name.length !== 0 && full_name.length < 3) errors.fullName = ('Name must be at least 3 characters long')
    if (full_name.length > 40) errors.fullName = ('Please enter your name at a length less than 40 characters')
    if (Object.keys(errors).length > 0) setDisable(true)
    if (Object.keys(errors).length === 0 && username.length > 1 && password.length > 1 && full_name.length > 1 && repeatPassword.length > 1) setDisable(false)

    setFormErrors(errors)
  }, [username, password, repeatPassword, full_name, disable])

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const capitalizedUsername = capitalizeFirstLetter(username);
      const capitalizedFullName = capitalizeFirstLetter(full_name);
      const data = await dispatch(signUp(capitalizedUsername, capitalizedFullName, email.toLowerCase(), password));
      if (data) {
        setErrors(data);
      }
    }
  };


  const demoUser = async (e) => {
    e.preventDefault()

    const demoEmail = 'demo@aa.io'
    const demoPassword = 'password'

    return await dispatch(login(demoEmail, demoPassword))
  }

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateFullName = (e) => {
    setFullName(e.target.value);
  };

  if (user) {
    return <Redirect to={prevLocation} />;
  }

  return (
    <div className='background-for-signup-and-login'>

      <div className='whole-sign-up-container'>
        <div className='sign-up-form'>
          <div className='logo-and-sign-up-message'>
            <img className='logo-sign-up-form' src="https://cdn-icons-png.flaticon.com/128/174/174849.png" alt='Logo' />
            <span>Sign up</span>
          </div>

          <form onSubmit={onSignUp}>
            <div className='errors-for-sign-up'>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <div className='all-sign-up-form-inputs-labels'>
              <input
                placeholder='Name'
                className='sign-up-form-inputs-only'
                type='text'
                name='fullName'
                onChange={updateFullName}
                value={full_name}
                required={true}
              ></input>
              {formErrors.fullName ?
                <div className='errors-for-sign-up'>{formErrors.fullName}</div>
                : null}
            </div>
            <div className='all-sign-up-form-inputs-labels'>
              <input
                placeholder='User Name'
                className='sign-up-form-inputs-only'
                type='text'
                name='username'
                onChange={updateUsername}
                value={username}
                required={true}
              ></input>
              {formErrors.username ?
                <div className='errors-for-sign-up'>{formErrors.username}</div>
                : null}
            </div>
            <div className='all-sign-up-form-inputs-labels'>
              <input
                placeholder='Email'
                className='sign-up-form-inputs-only'
                type='email'
                name='email'
                onChange={updateEmail}
                value={email}
                required={true}
              ></input>
            </div>
            <div className='all-sign-up-form-inputs-labels'>
              <input
                placeholder='Password'
                className='sign-up-form-inputs-only'
                type='password'
                name='password'
                onChange={updatePassword}
                value={password}
                required={true}
              ></input>
              {formErrors.password ?
                <div className='errors-for-sign-up'>{formErrors.password}</div>
                : null}
            </div>
            <div className='all-sign-up-form-inputs-labels'>
              <input
                placeholder='Confirm Password'
                className='sign-up-form-inputs-only'
                type='password'
                name='repeat_password'
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
              ></input>
              {formErrors.repeatPassword ?
                <div className='errors-for-sign-up'>{formErrors.repeatPassword}</div>
                : null}
            </div>
            <div className='sign-up-submit-button-div'>
              <button disabled={disable} className='sign-up-submit-button' type='submit'>Sign Up</button>
              <button className='login-submit-button' onClick={event => demoUser(event)}>Demo User</button>
            </div>
            <div className='sign-up-form-gray-line-before-already-member' />
            <div className='already-a-member-sign-up'> Already a member? <Link to='/login' style={{ textDecoration: 'none', color: 'rgb(0,130,199)' }}>Log in here.</Link></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
