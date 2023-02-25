import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getAllImages } from "../../store/image";
// import Footer from "../Footer/Footer";
import './ViewImage.css'
import { getImageByIdThunk } from "../../store/image";

const ViewImages = () => {
    const dispatch = useDispatch()
    const history = useHistory();


    const imagesObj = useSelector(state => {
        return state
    })



    const allImages = Object.values(imagesObj.imageReducer.allImages)


    const linkClick = (e, photoId) => {
        e.preventDefault()
        dispatch(getImageByIdThunk(photoId))
        setTimeout(() => {
            history.push(`/photos/${photoId}`)
        }, 500)
    }



    useEffect(() => {
        dispatch(getAllImages())
    }, [dispatch])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])





    return (
        <div className="background-for-explore-page">

            <div className="whole-explore-page-container">
                <div className="fix-position-container-mid-navbar">

                    <div className="mid-navbar-explore-page">
                        <Link className="links-on-mid-navbar-active" to='/photos'><span></span></Link>
                        <Link className="links-on-mid-navbar-in-dev"><span></span></Link>
                        <Link className="links-on-mid-navbar-in-dev"><span></span></Link>
                    </div>
                </div>
                <div className="all-images-explore-page">
                    {allImages.map((im) => (
                        <div key={im.id}>
                            <Link to={`/photos/${im.id}`} onClick={e => linkClick(e, im.id)}>
                                <img src={im.url} onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn-icons-png.flaticon.com/512/4897/4897859.png" }}
                                 className='images-on-display' alt='Images For Display' />
                            </Link>
                            {/* {
                                sessionUser && sessionUser.id === im.owner.id ?
                                    <div>
                                        <button onClick={event => editButton(event, im.id)}>Edit</button>
                                        <button onClick={event => deleteButton(event, im.id)}>Delete</button>
                                    </div>
                                    : null
                            } */}
                        </div>

                    ))}
                </div>
                {/* <Footer /> */}
            </div >
        </div>
    )
}

export default ViewImages;
