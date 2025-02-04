import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import './ProfileAbout.css'
import { getUserAlbums, removeAlbum } from '../../store/album';
import { useDispatch, useSelector } from 'react-redux';
import './ProfileAlbum.css'
import ProfilePageBanner from './ProfilePageBanner';
import DeleteAlbum from '../DeleteAlbum/DeleteAlbum';

function ProfileAlbums() {

    const { userId } = useParams();
    const dispatch = useDispatch()
    const history = useHistory()
    const [confirm, setConfirm] = useState(false)
    const userAlbums = useSelector(state => { return state })
    const currentUser = useSelector(state => state?.session?.user)
    const userAlbumsArray = Object.values(userAlbums.albumReducer.albumsForUser)

    useEffect(() => {
        dispatch(getUserAlbums(userId))
    }, [dispatch, userId])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const addAlbumButton = (e, id) => {
        e.preventDefault()
        history.push(`/people/${id}/albums/new`)
    }

    const deleteAlbumButton = (e) => {
        e.preventDefault()
        setConfirm(true)

    }
    const theSetConfirm = () => {
        setConfirm(false)
    }

    const editAlbumButton = (e, userId, albumId) => {
        e.preventDefault()
        history.push(`/people/${userId}/albums/${albumId}/edit`)
    }

    return (
        <div className='whole-profile-page-container'>
            <ProfilePageBanner />
            <div className='mid-navbar-profile-page-container'>
            {/* <Link to={`/people/${userId}/photostream`} className='mid-navbar-links-profile'>Photos</Link>
                <Link to={`/people/${userId}/albums`} className='mid-navbar-links-profile-active'>Albums</Link> */}
            </div>
            <div className='album-container-profile'>
                <div className='add-album-container'>
                    <h1>Albums</h1>
                    {currentUser?.id === +userId ?
                        <button className='button-to-add-album' onClick={e => addAlbumButton(e, userId)}><img className='add-album-icon' src='https://cdn-icons-png.flaticon.com/512/4274/4274059.png' /></button>
                        : null}
                </div>
                <div className='all-albums-container'>
                    {userAlbumsArray.map((al) => (
                        <>
                            {al.images.length > 0 ?
                                <>
                                    <div className='album-showroom-container'>
                                        <Link className='link-to-album' to={`/people/${userId}/albums/${al.id}`} style={{ backgroundImage: `url(${al.images[0].url})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', textDecoration: 'none', color: 'white' }} />
                                        <div key={al.id} className='album-name-and-buttons'>
                                            <div className='span-tag-album-name-link'>
                                                <span key={al.name}>{al.name.toUpperCase()}</span>
                                            </div>
                                            {currentUser?.id === +userId ?
                                                <div className='album-edit-delete-buttons'>
                                                    <button className='edit-delete-buttons-albums' onClick={e => editAlbumButton(e, userId, al.id)}><img src="https://cdn-icons-png.flaticon.com/512/2280/2280532.png" className="edit-image" /></button>
                                                    <button className='edit-delete-buttons-albums' onClick={e => deleteAlbumButton(e)}><img src="https://cdn-icons-png.flaticon.com/512/8134/8134441.png" className="delete-image" /></button>
                                                </div>
                                                : null}
                                            {confirm ? <DeleteAlbum confirm={confirm} setconfirm={theSetConfirm} albumId={al.id} /> : ""}
                                        </div>
                                    </div>
                                </>
                                : null
                            }
                        </>
                    ))}
                </div>
            </div>
        </div >
    );
}
export default ProfileAlbums;
