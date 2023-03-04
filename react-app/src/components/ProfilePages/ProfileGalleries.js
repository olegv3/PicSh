import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProfileAbout.css'
import ProfilePageBanner from './ProfilePageBanner';
import Banner from '../AlbumShowRoom/Banner';


function ProfileGalleries() {
    const [user, setUser] = useState({});
    const { userId } = useParams();

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
        <div className='whole-profile-page-container'>
            <ProfilePageBanner />
            {/* <Banner /> */}
            <div className='mid-navbar-profile-page-container'>
            </div>
            <div className='about-container-profile'>
                <h1></h1>
            </div>
        </div>
    );
}
export default ProfileGalleries;
