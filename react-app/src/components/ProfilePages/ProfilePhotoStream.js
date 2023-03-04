import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useHistory } from 'react-router-dom';
import { getUserImages, getImageByIdThunk } from '../../store/image';
import './ProfileAbout.css'
import './ProfilePhotoStream.css'
import ProfilePageBanner from './ProfilePageBanner';
import Banner from '../AlbumShowRoom/Banner';


function ProfilePhotoStream() {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const userImages = useSelector(state => state.imageReducer?.userImages)
    const currentUser = useSelector(state => state.session.user)
    const images = Object.values(userImages)


    useEffect(() => {
        dispatch(getUserImages(userId))
    }, [dispatch, userId])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const linkClick = (e, photoId) => {
        e.preventDefault()
        dispatch(getImageByIdThunk(photoId))
        setTimeout(() => {
            history.push(`/people/${userId}/photostream/${photoId}`)
        }, 500)
    }

    return (
        <div className='whole-profile-photostream-container'>
            <ProfilePageBanner />
            {/* <Banner /> */}
            <div className='mid-navbar-profile-page-container'>
            </div>
            {images?.length > 0 ?
                <div className='photostream-container-profile'>
                    <>
                        {images?.map((im) =>
                            <div key={im?.id} className='user-images-container'>
                                <Link to={`/people/${userId}/photostream/${im?.id}`} onClick={e => linkClick(e, im.id)}>
                                    <img src={im?.url} className='profile-photostream-photos' alt='Images For Display' />
                                </Link>
                            </div>
                        )}
                    </>
                </div>
                :
                <>
                    {currentUser?.id === parseInt(userId) ?

                        <div className='no-images-uploaded'>
                            <h1></h1>
                            <h2>Click <Link to='/upload' className='upload-here-profile'>here </Link> to upload your first image &#128512;</h2>
                        </div>
                        :
                        <div className='no-images-uploaded'>
                        </div>
                    }
                </>
            }
        </div>
    );
}
export default ProfilePhotoStream;
