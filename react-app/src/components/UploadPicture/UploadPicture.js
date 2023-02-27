import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './UploadPicture.css'
import { getUserAlbums } from "../../store/album";
import { getUserImages } from "../../store/image";

const UploadPicture = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [tags, setTags] = useState("")
    const [people, setPeople] = useState("")
    const [album, setAlbum] = useState(0)
    const [errors, setErrors] = useState([])
    const [disable, setDisable] = useState(true)

    const currentUser = useSelector(state => state.session.user)

    const userAlbums = useSelector(state => { return state })
    const userAlbumsArray = Object.values(userAlbums.albumReducer.albumsForUser)




    useEffect(() => {
        const errors = []
        if (image) {
            if (image?.type !== 'video/mp4' && image?.type !== 'image/jpg' && image?.type !== 'image/jpeg' && image?.type !== 'image/png') errors.push('Please only upload png, jpg, or jpeg')

            setTitle(image.name.split('.')[0])


        } else setTitle('')
        if (!image) errors.push('')
        if (errors.length > 0) setDisable(true)
        if (errors.length === 0) setDisable(false)
        setErrors(errors)


    }, [image, disable])

    useEffect(() => {
        dispatch(getUserAlbums(currentUser.id))
    }, [currentUser.id, dispatch])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (errors.length > 0) return
        const formData = new FormData();
        formData.append("image", image);
        formData.append("title", title)
        formData.append("description", description)
        formData.append("tags", tags)
        formData.append("people", people)
        if (album > 0) formData.append("albums", +album)

        setImageLoading(true);

        const res = await fetch('/api/images', {
            method: "POST",
            body: formData,
        });
        if (res.ok) {
            const data = await res.json();
            setImageLoading(false);
            setTimeout(() => {
                history.push(`/photos/${data.id}`);
            }, 500)

        }
        else {
            setImageLoading(false);

            console.log("error");

        }
    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    const updateDescription = (e) => {
        setDescription(e.target.value)
    }

    const updateTags = (e) => {
        setTags(e.target.value)
    }

    const updatePeople = (e) => {
        setPeople(e.target.value)
    }
    const updateTitle = (e) => {
        setTitle(e.target.value)
    }
    return (
        <div className='background-for-signup-and-login'>
            <div className="whole-upload-container">
                <div className="sign-up-form">
                    <div className="image-size-warning">
                        <span className="warning-upload-spans"></span>
                        <span className="warning-upload-spans"></span>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='errors-for-sign-up'>
                            {errors.map((error, ind) => (
                                <div key={ind}>{error}</div>
                            ))}
                        </div>
                        <div className='all-sign-up-form-inputs-labels'>

                            <input
                                className="choose-file-button-upload"
                                type="file"
                                accept="image/*"
                                placeholder="Upload Image"
                                onChange={updateImage}
                            />
                        </div>
                        <div className='all-sign-up-form-inputs-labels'>
                            <label></label>
                            <input
                                className='sign-up-form-inputs-only'
                                placeholder="Title"
                                type="text"
                                onChange={updateTitle}
                                value={title}
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
                            <label></label>
                            <select
                                name="albums"
                                id="albums"
                                value={album}
                                onChange={(e) => setAlbum(e.target.value)}
                                className='sign-up-form-inputs-only'
                            >
                                <option value='' style={{ color: 'grey' }}>Choose Album (optional)</option>
                                {userAlbumsArray.map((al) => (
                                    <option key={al.id} value={al.id}>{al.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className='upload-submit-button-div'>
                            <button disabled={disable} className='sign-up-submit-button' type='submit'>Upload</button>
                            {(imageLoading) && <p>Loading...</p>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UploadPicture;
