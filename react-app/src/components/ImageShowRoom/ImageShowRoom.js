import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { getImageByIdThunk } from "../../store/image";
import './ImageShowRoom.css'
// import DefaultProfilePic from '../../assets/misc/DefaultProfilePicture.jpg'
// import Footer from "../Footer/Footer";
// import CommentForm from "../CommentForm/CommentForm";
// import EditCommentModal from "../EditComment/EditCommentModal";


const ImageShowRoom = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { id } = useParams()
    const prevLocation = useLocation();
    const currentImage = useSelector(state => state?.imageReducer?.currentImage[id])
    const currentUser = useSelector(state => state.session.user)

    let imageTags;
    if (currentImage?.tags !== null && currentImage?.tags.includes(',')) imageTags = currentImage?.tags.split(',')
    else if (currentImage?.tags !== null) imageTags = [currentImage?.tags]

    const commentsForImage = currentImage?.comments


    useEffect(() => {
        dispatch(getImageByIdThunk(id))
    }, [dispatch, id])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const deleteButton = async (e, id) => {
        e.preventDefault()

        return history.push(`/photos/${id}/delete-confirm?re-direct=${prevLocation.pathname}`)
    }

    const editButton = async (e, id) => {
        e.preventDefault()

        return history.push(`/photos/${currentUser.id}/${id}/edit-details?re-direct=${prevLocation.pathname}`)
    }

    return (
        <>
            {
                currentImage ?
                    <>
                        < div className="image-container-showroom" >
                            <div>
                                <Link to='/photos' className="back-to-explore-link-div">
                                    <div className="icon-for-back-to-explore">
                                        <i className="fa-solid fa-arrow-left"></i>
                                    </div>
                                    <span className="back-to-explore-link">Back to photos</span>
                                </Link>
                            </div>
                            <div className="showroom-image-div">
                                <img className="showroom-image" src={currentImage?.url} onError={(e) => { e.target.onerror = null; e.target.src = "https://www.theoxygenstore.com/images/source/No-image.jpg" }} />
                            </div>
                            <div className="bottom-of-showroom-image">
                                <div className="icons-for-showroom-image">
                                    {currentUser && currentUser?.id === currentImage?.username ?
                                        <div className="edit-delete-button-image-showroom-div">
                                            <button className="edit-delete-button-image-showroom" onClick={event => editButton(event, currentImage?.id)}><img src="https://cdn-icons-png.flaticon.com/512/2280/2280532.png" className="edit-image" /></button>
                                            <button className="edit-delete-button-image-showroom" onClick={event => deleteButton(event, currentImage?.id)}><img src="https://cdn-icons-png.flaticon.com/512/8134/8134441.png" className="delete-image" /></button>
                                        </div>
                                        :
                                        // <i className="fa-regular fa-star"></i>
                                        <></>
                                    }
                                </div>
                            </div>
                        </div >
                        <div className="rest-of-showroom-container">
                            <div className="profile-username-title-follow">
                                <div className="profile-picture-pro-showroom">
                                    {/* <Link to={`/people/${currentImage?.owner.id}/photostream`}><img className="profile-picture-showroom" src={'DefaultProfilePic'} /></Link> */}
                                    <div className="span-tag-pro-div">
                                        {/* <span className="span-tag-pro">PRO</span> */}
                                    </div>
                                </div>
                                <div className="username-title-showroom">
                                    <div className="username-follow-button-div-showroom">
                                        {/* <Link to={`/people/${currentImage?.owner?.id}/photostream`} className='username-image-showroom-link'><span>{currentImage?.owner?.username}</span></Link> */}
                                        {currentUser && currentImage?.owner?.id !== currentUser.id ?
                                            <div className="follow-button-showroom-div">
                                                {/* <button className="follow-button-showroom"><i className="fa-solid fa-plus"></i> Follow</button> */}
                                                {/* <span className="under-dev-follow-button">Follow Button Under Development</span> */}
                                            </div>
                                            : null}
                                    </div>
                                    {/* <div className="title-showroom-span-div">
                                        <span>{currentImage?.title}</span>
                                    </div> */}
                                    {/* <div className="description-showroom-span-div">
                                        <span className="description-showroom-span">{currentImage?.description}</span>
                                    </div> */}
                                    {/* <div className="image-tags-showroom-div">
                                        {imageTags?.map((tag, id) => (
                                            <span key={id}>[<Link to={`/photos/tags/${tag}`} className='tag-links' >{tag}</Link>]</span>
                                        ))}
                                    </div> */}
                                </div>
                            </div>
                            <div className="border-div-showroom" />
                            <div className="lower-half-of-image-showroom">
                                {/* <div className="left-side-of-lower-half"> */}
                                <div className="comments-container">
                                    {/* <span className="span-tag-comment-header">Comments</span> */}
                                    {commentsForImage?.map((comment) => (
                                        <div key={comment.id} className='comment-div-showroom'>
                                            {/* <Link className="link-for-users-comments" to={`/people/${comment?.owner.id}/photostream`}>{comment.owner.fullName}</Link> */}
                                            <div className="single-comment-body-with-buttons">
                                                {/* <span>{comment.comment}</span> */}
                                                <div>
                                                    {/* <EditCommentModal imageId={currentImage?.id} commentId={comment.id} currentComment={comment.comment} user={currentUser} commentOwner={comment.owner} /> */}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {currentUser ?
                                    <div className="comment-form-div-image-showroom">
                                        {/* <CommentForm user={currentUser} imageId={currentImage?.id} /> */}
                                    </div>
                                    :
                                    <div>
                                        {/* <CommentForm /> */}
                                    </div>
                                }
                                {/* </div> */}
                                {/* <div>
                                    <span>Placeholder</span>
                                </div> */}
                            </div>
                        </div>
                        {/* <Footer /> */}
                    </>
                    :
                    <div className="photo-no-exist">
                        {/* <h1>404</h1>
                        <h2 className="h2-404-error">This is not the page you're looking for.</h2>
                        <h3 className="h3-404-error">It appears the photo you seek no longer exists.</h3>
                        <h3 className="h3-404-error">Please return to the <Link className="a404-link-to-explore" to='/photos'>explore</Link>  page</h3> */}
                    </div>
            }
        </>
    )
}

export default ImageShowRoom
