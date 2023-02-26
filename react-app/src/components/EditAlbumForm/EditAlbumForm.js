import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { oneAlbum } from "../../store/album";
import { updateAlbum } from "../../store/album";
import ImageButton from "../AlbumForm/ImageButton";


const letters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");


const EditAlbumForm = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const [description, setDescription] = useState("")
    const [name, setName] = useState("")
    const [photos, setPhotos] = useState(new Set())
    const [selected, setSelected] = useState(false)
    const [errors, setErrors] = useState([])
    const [disable, setDisable] = useState(true)
    let { albumId } = useParams()
    albumId = +albumId



    const currentUser = useSelector(state => state.session.user)
    const currentAlbumImages = useSelector(state => state.albumReducer.currentAlbum.images)






    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/albums/${albumId}`)
            const data = await res.json()
            setName(data?.name)
            setDescription(data?.description)
        })()
    }, [albumId])

    useEffect(() => {
        const errors = []
        if (name.length < 1 || !letters.includes(name[0])) errors.push('Please provide a Name')
        if (selected) errors.push('Albums must have at least one photo')
        if (errors.length > 0) setDisable(true)
        if (errors.length === 0) setDisable(false)


        setErrors(errors)
    }, [selected, name])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        if (errors.length > 0) return
        const images = Array.from(photos).join()
        const albumInfo = {
            albumId: +albumId,
            name,
            description,
            images
        }
        const editedData = dispatch(updateAlbum(albumInfo))
        if (editedData) {
            return history.push(`/people/${currentUser.id}/albums`)

        }
    }

    const photoSelect = (e, id) => {
        e.preventDefault()


        if (photos.has(id)) {
            photos.delete(id)
            setSelected(false)
        } else {

            photos.add(id)
            if (currentAlbumImages?.length === photos.size) {
                setSelected(true)
            }
        }

        setPhotos(photos)


        return photos


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
    useEffect(() => {
        dispatch(oneAlbum(albumId))
    }, [dispatch, albumId])

    return (
        <div className='background-for-album-form'>
            <div className="whole-upload-container">
                <div className="album-form">
                    <form onSubmit={handleSubmit}>
                        <div className='album-logo-and-message'>
                            <span></span>
                        </div>
                        <div className='errors-for-sign-up'>
                            {errors.length > 0 ? errors.map((error, ind) => (
                                <div key={ind}>{error}</div>
                            )) : null}
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
                            <label>Click on photos you want to remove</label>
                            <div className="album-form-photo-select">
                                {currentAlbumImages?.map((im) => (
                                    <ImageButton photoSelect={photoSelect} image={im} />
                                ))}
                            </div>
                        </div>
                        <div className='upload-submit-button-div'>
                            <button disabled={disable} className='sign-up-submit-button' type='submit'>Update</button>
                            <button onClick={e => cancelButton(e)} className='sign-up-submit-button'>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditAlbumForm;
