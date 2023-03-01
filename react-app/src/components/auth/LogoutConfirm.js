import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../store/session";
import './LogoutConfirm.css'

const LogoutConfirm = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const onLogout = async (e) => {
    e.preventDefault()
    await dispatch(logout());
    return history.push('/')
  };

  const cancelButton = (e) => {
    e.preventDefault()
    history.push(`/photos`)
  }

  return (
    <div className='background-for-signup-and-login'>
      <div className="confirm-delete-container">
        <div className="sign-up-form">
            <div className="confirm-delete-message" >
            </div>
            <div className='delete-cancel-button-div'>
              <button className='sign-up-submit-button' onClick={onLogout}>Logout</button>
              <button className='sign-up-submit-button' onClick={cancelButton}>Cancel</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LogoutConfirm
