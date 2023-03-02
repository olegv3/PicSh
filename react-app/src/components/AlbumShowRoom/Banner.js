// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { getUserAlbums, getUserAlbumPhotos } from '../../store/album';
// import { useDispatch, useSelector } from 'react-redux';

// const Banner = () => {
//     const { userId } = useParams();
//     const dispatch = useDispatch();
//     const [bannerImage, setBannerImage] = useState(null);

//     const { albums } = useSelector(state => state.albumReducer);

//     useEffect(() => {
//         dispatch(getUserAlbums(userId));
//     }
//     , [dispatch, userId]);

//     useEffect(() => {
//         if (albums[0]) {
//             dispatch(getUserAlbumPhotos(albums[0].id));
//         }

//     }
//     , [dispatch, albums]);

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }
//     , []);

//     useEffect(() => {
//         if (albums[0]) {
//             setBannerImage(albums[0].images[0].url);
//         }
//     }
//     , [albums]);



//     return (
//         <div className='banner-container'>
//             <img className='banner-image' src={bannerImage} alt='Banner' />
//         </div>
//     );
// };

// export default Banner;
