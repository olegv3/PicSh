import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProfileAbout.css'
import ProfilePageBanner from './ProfilePageBanner';


function ProfileStats() {

    const { userId } = useParams();



    return (
        <div className='whole-profile-page-container'>
            <ProfilePageBanner />
            <div className='mid-navbar-profile-page-container'>
            </div>
            <div className='about-container-profile'>
            </div>
        </div>
    );
}
export default ProfileStats;
