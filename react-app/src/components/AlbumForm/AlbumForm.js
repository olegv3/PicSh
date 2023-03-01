import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";
import { getUserAlbums, uploadAlbum } from "../../store/album";
import { getUserImages } from "../../store/image";
import ImageButton from "./ImageButton";
import "./AlbumForm.css";


const letters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");


const AlbumForm = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const { userId } = useParams()
    const [description, setDescription] = useState("")
    const [name, setName] = useState("")
    const [photos, setPhotos] = useState(new Set())
    const [selected, setSelected] = useState(false)
    const [errors, setErrors] = useState({})
    const [disable, setDisable] = useState(true)

    const currentUser = useSelector(state => state.session.user)

    const imagesObj = useSelector(state => {
        return state
    })

    const allUserImages = Object.values(imagesObj.imageReducer.userImages)


    useEffect(() => {
        const errors = {}
        if (name.length > 0 && !letters.includes(name[0])) errors.name = ('Please provide a Name')
        if (!selected) errors.photo = ('')
        if (Object.keys(errors).length > 0) setDisable(true)
        if (Object.keys(errors).length === 0 && name.length > 0 && selected) setDisable(false)
        setErrors(errors)
    }, [name, selected, disable])



    useEffect(() => {
        dispatch(getUserImages(currentUser?.id))
    }, [dispatch, currentUser])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        if (errors.length > 0) return
        const images = Array.from(photos).join()
        const albumInfo = {
            name,
            description,
            images
        }
        dispatch(uploadAlbum(albumInfo))
        setTimeout(() => {
            dispatch(getUserAlbums(userId));
        }, 100)
        setTimeout(() => {
            history.push(`/people/${currentUser.id}/albums`)
        }, 500)
    }

    const cancelButton = (e) => {
        e.preventDefault()
        return history.push(`/people/${currentUser.id}/albums`)
    }

    const updateDescription = (e) => {
        setDescription(e.target.value)
    }

    const updateName = (e) => {
        setName(e.target.value)
    }



    const photoSelect = (e, id) => {
        e.preventDefault()


        if (photos.has(id)) {
            photos.delete(id)
            if (photos.size === 0) {
                setSelected(false)
            }
        } else {

            photos.add(id)
            setSelected(true)
        }

        return photos
    }




    return (
        <div className='background-for-album-form'>
            <div className="whole-upload-container">
                <div className="album-form">
                    <form onSubmit={handleSubmit}>
                        <div className='album-logo-and-message'>
                        <img className='logo-album-form' alt='Logo' src='https://cdn-icons-png.flaticon.com/128/174/174849.png' />
                            <span>Create a new Album</span>
                        </div>
                        <div className='all-sign-up-form-inputs-labels'>
                            <label></label>
                            <input
                                className='sign-up-form-inputs-only'
                                placeholder="Name"
                                type="text"
                                onChange={updateName}
                                value={name}
                            />
                            <div className='errors-for-sign-up'>
                                {errors.name ? <div>{errors.name}</div> : null}
                            </div>
                        </div>
                        <div className='all-sign-up-form-inputs-labels'>
                            <label></label>
                            <input
                                className='sign-up-form-inputs-only'
                                placeholder="Description"
                                type="text"
                                onChange={updateDescription}
                                value={description}
                            />
                        </div>
                        <div className='all-sign-up-form-inputs-labels'>
                            <label>
                                <div className='errors-for-sign-up'>
                                    {errors.photo ? <div>{errors.photo}</div> : null}
                                </div>
                            </label>
                            <div className="album-form-photo-select">
                                {allUserImages.length < 1 ?
                                    <div>
                                        <span>No images. </span>
                                        <span>Upload <Link to='/upload' className="upload-here-link">here</Link></span>
                                    </div>
                                    :
                                    null}
                                {allUserImages?.map((im) => (
                                    <ImageButton photoSelect={photoSelect} image={im} />
                                ))}
                            </div>
                        </div>
                        <div className='upload-submit-button-div'>
                            <button disabled={disable} className='sign-up-submit-button' type='submit'>Create Album</button>
                            <button onClick={e => cancelButton(e)} className='sign-up-submit-button'>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AlbumForm;
