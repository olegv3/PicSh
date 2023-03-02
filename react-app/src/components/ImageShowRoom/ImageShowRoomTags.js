import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { getImageByIdThunk } from "../../store/image";
import './ImageShowRoom.css'
import Footer from "../Footer/Footer";
import EditCommentModal from "../EditComment/EditCommentModal";
import CommentForm from "../CommentForm/CommentForm";


const ImageShowRoomTags = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const prevLocation = useLocation();
    const { tag, photoId } = useParams()
    const currentImage = useSelector(state => state?.imageReducer?.currentImage[photoId])
    const currentUser = useSelector(state => state.session.user)
    let imageTags;
    if (currentImage?.tags !== null && currentImage?.tags.includes(',')) imageTags = currentImage?.tags.split(',')
    else if (currentImage?.tags !== null) imageTags = [currentImage?.tags]

    const commentsForImage = currentImage?.comments

    useEffect(() => {
        dispatch(getImageByIdThunk(photoId))
    }, [dispatch, photoId])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const deleteButton = async (e, id) => {
        e.preventDefault()

        return history.push(`/photos/${id}/delete-confirm?redirectTo=${prevLocation.pathname}`)
    }

    const editButton = async (e, id) => {
        e.preventDefault()

        return history.push(`/photos/${currentUser.id}/${id}/edit-details?redirectTo=${prevLocation.pathname}`)
    }


    return (
        <>
            {
                currentImage ?
                    <>
                        <div className="image-container-showroom">
                            <div>
                                <Link to={`/photos/tags/${tag}`} className="back-to-explore-link-div">
                                    <div className="icon-for-back-to-explore">
                                        <i className="fa-solid fa-arrow-left"></i>
                                    </div>
                                    <span className="back-to-explore-link"></span>
                                </Link>
                            </div>
                            <div className="showroom-image-div">
                                <img className="showroom-image" src={currentImage?.url} />
                            </div>
                            <div className="bottom-of-showroom-image">
                                <div className="icons-for-showroom-image">
                                    {currentUser?.id === currentImage?.username ?
                                        <div className="edit-delete-button-image-showroom-div">
                                            <button className="edit-delete-button-image-showroom" onClick={event => editButton(event, currentImage?.id)}><img src="https://cdn-icons-png.flaticon.com/512/2280/2280532.png" className="edit-image" /></button>
                                            <button className="edit-delete-button-image-showroom" onClick={event => deleteButton(event, currentImage?.id)}><img src="https://cdn-icons-png.flaticon.com/512/8134/8134441.png" className="delete-image" /></button>
                                        </div>
                                        :
                                        null
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="rest-of-showroom-container">
                            <div className="profile-username-title-follow">
                                <div className="profile-picture-pro-showroom">
                                    <Link to={`/people/${currentImage?.owner.id}/photostream`}><img className="profile-picture-showroom" src="https://cdn-icons-png.flaticon.com/512/2983/2983067.png" /></Link>
                                    <div className="span-tag-pro-div">
                                        <span className="span-tag-pro"></span>
                                    </div>
                                </div>
                                <div className="username-title-showroom">
                                    <div className="username-follow-button-div-showroom">
                                        <Link to={`/people/${currentImage?.owner.id}/photostream`} className='username-image-showroom-link'><span>{currentImage?.owner.username}</span></Link>
                                        {currentImage?.owner.id !== currentUser?.id ?
                                            <div className="follow-button-showroom-div">
                                            </div>
                                            : null}
                                    </div>
                                    <div className="title-showroom-span-div">
                                        <span>{currentImage?.title}</span>
                                    </div>
                                    <div className="description-showroom-span-div">
                                        <span className="description-showroom-span">{currentImage?.description}</span>
                                    </div>

                                </div>
                            </div>
                            <div className="border-div-showroom" />
                            <div className="lower-half-of-image-showroom">
                                <span className="span-tag-comment-header"></span>
                                <div className="comments-container">
                                    {commentsForImage?.map((comment) => (
                                        <div key={comment.id} className='comment-div-showroom'>
                                            <Link className="link-for-users-comments" to={`/people/${comment?.owner.id}/photostream`}>{comment.owner.fullName}</Link>
                                            <div className="single-comment-body-with-buttons">

                                                <div>
                                                    <EditCommentModal imageId={currentImage?.id} commentId={comment.id} currentComment={comment.comment} user={currentUser} commentOwner={comment.owner} />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {currentUser && currentImage?.owner?.id !== currentUser.id &&
                                <div className="comment-form-div-image-showroom">
                               <CommentForm user={currentUser} imageId={currentImage?.id} />
                                   </div>
                                 }
                                 {!currentUser &&
                                  <div>
                                  <CommentForm />
                                    </div>
                                }

                            </div>
                        </div>
                        {/* <Footer /> */}
                    </>
                    :
                    <div className="photo-no-exist">
                    </div>
            }
        </>
    )
}

export default ImageShowRoomTags
