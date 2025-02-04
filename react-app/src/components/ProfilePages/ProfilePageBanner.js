import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProfileAbout.css'
import { getUserAlbums } from '../../store/album';
import { useDispatch } from 'react-redux';
import './ProfileAlbum.css'
import Banner from '../AlbumShowRoom/Banner';

function ProfilePageBanner() {
    const [user, setUser] = useState({});
    const { userId } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        if (!userId) {
            return;
        }
        (async () => {
            const response = await fetch(`/api/users/${userId}`);
            const user = await response.json();
            setUser(user);
        })();
    }, [userId]);

    return (
        <div className='profile-page-banner-container'>
            <div className='navbar-placeholder'></div>
            <div className='profile-banner-image'>
                <Banner />
                <div className='user-information-profile'>
                    <div className='profile-picture-div-profile'>
                        <img className='profile-picture-profile-page' src="https://cdn-icons-png.flaticon.com/512/2983/2983067.png" alt='DefaultPic' />
                    </div>
                    <div className='split-div-for-information'>
                        <div className='full-name-and-button'>
                            <span className='full-name-span-profile'>{user.fullName}</span>
                            <div className='extra-button-profile-div'>
                            </div>
                        </div>
                        <div className='username-followers-following'>
                            <span>{user.username}</span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePageBanner;
