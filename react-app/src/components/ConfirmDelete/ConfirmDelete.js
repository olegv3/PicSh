import { useDispatch } from "react-redux";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { deleteImageThunk, getAllImages } from "../../store/image";


const ConfirmDelete = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation();
    const prevLocation = (location.search.split('=')[1])


    const deleteButton = async (e, id) => {
        e.preventDefault()
        dispatch(deleteImageThunk(id))
        dispatch(getAllImages())
        setTimeout(function () {
            history.push(`/photos`)
        }, 500);


    }

    
    const cancelButton = async (e, id) => {
        e.preventDefault()
        history.push(prevLocation)
    }

    return (
        <>
            <div className='background-for-signup-and-login'>
                <div className="confirm-delete-container">
                    <div className="sign-up-form">
                        <form>
                            <div className="confirm-delete-message" >
                            </div>
                            <div className='delete-cancel-button-div'>
                                <button className='sign-up-submit-button' onClick={event => deleteButton(event, id)}>Delete</button>
                                <button className='sign-up-submit-button' onClick={event => cancelButton(event, id)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfirmDelete
