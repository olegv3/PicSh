import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import EditCommentForm from "./EditCommentForm";
import { getImageByIdThunk } from "../../store/image";
import { useDispatch } from "react-redux";

const EditCommentModal = ({ commentId, currentComment, user, commentOwner, imageId }) => {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const dispatch = useDispatch();

  const editCommentButtonRef = useRef(null);

  const deleteCommentButton = async (e, commentId) => {
    e.preventDefault();

    const res = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    if (res.ok) {
      await res.json();
      dispatch(getImageByIdThunk(imageId));
    }
  };

  useEffect(() => {
    const closeCommentForm = () => {
      setShowCommentForm(false);
    };
    if (editCommentButtonRef.current) {
      editCommentButtonRef.current.addEventListener(
        "click",
        closeCommentForm
      );
    }
    return () => {
      if (editCommentButtonRef.current) {
        editCommentButtonRef.current.removeEventListener(
          "click",
          closeCommentForm
        );
      }
    };
  }, [editCommentButtonRef]);

  const closeCommentForm = () => {
    setShowCommentForm(!showCommentForm);
  };

  return (
    <>
      <div className="comment-container">
        {showCommentForm ? (
          <div>
            <EditCommentForm
              setShowCommentForm={setShowCommentForm}
              showCommentForm={showCommentForm}
              imageId={imageId}
              commentText={currentComment}
              commentId={commentId}
            />
          </div>
        ) : (
          <div className="comment-body-div">
            <span>{currentComment}</span>
          </div>
        )}
        <div>
          {user && user.id === commentOwner.id && (
            <>
              {!showCommentForm && (
                <div className="comment-edit-and-delete-div">
                  <span
                    ref={editCommentButtonRef}
                    onClick={closeCommentForm}
                    className="edit-comment-button"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2280/2280532.png"
                      className="edit-image"
                    />
                  </span>
                  <span
                    onClick={(e) => deleteCommentButton(e, commentId)}
                    className="edit-comment-button"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/8134/8134441.png"
                      className="delete-image"
                    />
                  </span>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default EditCommentModal;

