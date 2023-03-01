import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getImageByIdThunk } from "../../store/image";
import "./EditCommentForm.css";

const EditCommentForm = ({
  commentId,
  commentText,
  currentComment,
  imageId,
  setShowCommentForm,
  showCommentForm,
}) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState(commentText);
  const [errors, setErrors] = useState([]);
  const [disable, setDisable] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("comment", comment);
    const res = await fetch(`/api/comments/${commentId}`, {
      method: "PUT",
      body: formData,
    });
    if (res.ok) {
      await res.json();
      dispatch(getImageByIdThunk(imageId));
      setShowCommentForm(!showCommentForm);
    }
  };

  const updateComment = (e) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    const error = [];
    if (!/\S/.test(comment) && comment.length > 0) {
      error.push("Blank comments are not allowed");
    }
    if (comment.length > 100) {
        error.push("Comments cannot exceed 100 characters");
    }
    
    setErrors(error);
    setDisable(error.length > 0);
  }, [comment]);

  return (
    <div className="comment-form-container">
      <form onSubmit={handleSubmit}>
        <div className="edit-comment-form-div">
          {errors.length > 0 && (
            <span className="comment-error">{errors[0]}</span>
          )}
          <textarea
            className="edit-comment-textarea"
            placeholder="Add a comment?"
            type="text"
            onChange={updateComment}
            value={comment}
            required
          />
        </div>
        <div className="submit-button-edit-comment-div">
          <button
            disabled={disable}
            type="submit"
            className="submit-button-edit-comment"
          >
            Done
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCommentForm;
