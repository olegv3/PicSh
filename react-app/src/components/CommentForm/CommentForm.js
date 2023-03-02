import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Link, useLocation } from "react-router-dom";
import { getUserAlbums } from "../../store/album";
import { uploadAlbum } from "../../store/album";
import { getUserImages } from "../../store/image";
import './CommentForm.css'
import { getImageByIdThunk } from "../../store/image";

const CommentForm = ({ user, imageId }) => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');
    const [errors, setErrors] = useState([]);
    const [disable, setDisable] = useState(true);
    const prevLocation = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("imageId", imageId);
        formData.append("comment", comment);

        const res = await fetch('/api/comments', {
            method: "POST",
            body: formData
        });
        if (res.ok) {
            await res.json();
            dispatch(getImageByIdThunk(imageId));
            setComment('');
        }
    };

    const updateComment = (e) => {
        setComment(e.target.value);
    };

    useEffect(() => {
        const error = [];
        if (!/\S/.test(comment) && comment.length > 0) {
            error.push('Error, blank comments not allowed');
        }
        if (comment.length > 100) {
            error.push('Comments cannot exceed 100 characters');
        }
        setErrors(error);
        setDisable(error.length > 0);
    }, [comment]);

    return (
        <div className="comment-form-container">
            <form onSubmit={handleSubmit}>
                <div className="comment-form-div">
                    {errors.length > 0 &&
                        <h5 className="comment-error">{errors[0]}</h5>}
                    <textarea
                        className='comment-textarea'
                        placeholder="Add a comment"
                        type="text"
                        onChange={updateComment}
                        value={comment}
                        required
                    />
                    {user ?
                        <div className="submit-button-comment-div">
                            <button disabled={disable} type="submit" className="submit-button-comment">Comment</button>
                        </div>
                        :
                        <div className="submit-button-comment-div">
                            <Link to={`/login?redirectTo=${prevLocation.pathname}`}><button className="submit-button-edit-comment">Login</button></Link>
                        </div>
                    }
                </div>

            </form>
        </div>
    );
};

export default CommentForm;
