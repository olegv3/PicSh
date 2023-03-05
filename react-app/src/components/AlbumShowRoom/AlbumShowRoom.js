import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { oneAlbum } from '../../store/album';
import { useDispatch, useSelector } from 'react-redux';
import './AlbumShowRoom.css';
import Footer from '../Footer/Footer';

const AlbumShowRoom = () => {
  const { userId, albumId } = useParams();
  const dispatch = useDispatch();

  const { currentAlbum } = useSelector(state => state.albumReducer);

  const albumImages = currentAlbum?.images || [];

  useEffect(() => {
    dispatch(oneAlbum(albumId));
  }, [dispatch, albumId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='whole-album-showroom-container'>

      <div className='album-banner-showroom'>
        <div className='album-name-description-div'>
          <span className='album-name-showroom'>
            {currentAlbum?.name?.substring(0, 30)}
          </span>
          <span className='album-description-showroom'>
            {currentAlbum?.description?.substring(0, 45)}
          </span>
        </div>
        <img
          className='album-image-banner'
          alt={albumImages.length > 0 ? albumImages[0].title : 'Banner Image'}
          src={albumImages.length > 0 ? albumImages[0].url : null}
        />
      </div>
      <div className='link-back-to-album-list-div'>
        <Link to={`/people/${userId}/albums`} className='back-to-album-list-link-div'>
          <div className='icon-for-back-to-explore'>
            <i className='fa-solid fa-arrow-left'></i>
          </div>
          <span className='back-to-album-list-link'>Back to all Albums</span>
        </Link>
      </div>

      <div className='all-images-in-album'>
        {albumImages.map((image) => (
          <div key={image.id}>
            <Link to={`/people/${image.username}/albums/${albumId}/photos/${image.id}`}>
              <img className='images-album-showroom' src={image.url} alt={image.title} onError={(e) => { e.target.onerror = null; e.target.src = 'https://www.tripwiremagazine.com/wp-content/uploads/2010/11/Fotolia.jpg'; }} />
            </Link>
          </div>
        ))}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AlbumShowRoom;
