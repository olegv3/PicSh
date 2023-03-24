import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { editImageThunk, getImageByIdThunk } from "../../store/image";
import './UpdateImageDetails.css'
import { getUserAlbums } from "../../store/album";

const UpdateImageDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const currentImage = useSelector(state => state?.imageReducer?.allImages[id]);
  const dispatch = useDispatch();
  const location = useLocation();
  const prevLocation = (location.search.split('=')[1]);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    people: '',
    album: 0,
  });

  const currentUser = useSelector(state => state.session.user);

  const userAlbums = useSelector(state => state.albumReducer.albumsForUser);
  const userAlbumsArray = Object.values(userAlbums);

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/images/${id}`);
      const data = await res.json();
      setFormData({
        title: data[id]?.title,
        description: data[id]?.description,
        tags: data[id]?.tags,
        people: data[id]?.people,
        album: 0,
      });
    })();
    dispatch(getImageByIdThunk(id));
    dispatch(getUserAlbums(currentUser.id));
    window.scrollTo(0, 0);
  }, [id, currentUser.id, dispatch]);

  const updateFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const updatedData = {
      imageId: +id,
      ...formData,
    };
    if (formData.album > 0) {
      updatedData.albums = +formData.album;
    }
    const editedData = await dispatch(editImageThunk(updatedData));
    if (editedData) {
      history.push(prevLocation);
    }
  };

  const cancelButton = (e) => {
    e.preventDefault();
    history.push(prevLocation);
  };

  return (
    <div className='background-for-signup-and-login'>
      <div className="update-image-form-container">
        <div className='sign-up-form'>
          <div className="confirm-delete-message"></div>
          <form onSubmit={onSubmit}>
            <div className='all-sign-up-form-inputs-labels'>
              <input
                className='sign-up-form-inputs-only'
                placeholder="Not Required"
                type="text"
                name="title"
                onChange={updateFormData}
                value={formData.title}
              />
            </div>

            <div className='all-sign-up-form-inputs-labels'>
              <input
                className='sign-up-form-inputs-only'
                placeholder="Not Required"
                type="text"
                name="description"
                onChange={updateFormData}
                value={formData.description}
              />
            </div>

            <div className='all-sign-up-form-inputs-labels'>
              <input
                className='sign-up-form-inputs-only'
                placeholder="Tags (separate with commas)"
                type="text"
                name="tags"
                onChange={updateFormData}
                value={formData.tags}
              />
            </div>

            <div className='all-sign-up-form-inputs-labels'>
              <select
                name="album"
                id="album"
                value={formData.album}
                onChange={updateFormData}
                className='sign-up-form-inputs-only'
              >
                <option value='' style={{ color: 'grey' }}>Optional</option>
                {userAlbumsArray.map((al) => (
                  <option key={al.id} value={al.id} disabled={currentImage?.albums.includes(al.id)}>
                    {al.name}
                  </option>
                ))}
              </select>
            </div>

            <div className='delete-cancel-button-div'>
              <button className='sign-up-submit-button' type='submit'>Save Changes</button>
              <button className='sign-up-submit-button' onClick={cancelButton}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateImageDetails;
