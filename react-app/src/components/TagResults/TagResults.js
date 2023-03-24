import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getTagImages } from "../../store/image";
import "./TagResults.css";

const TagResults = () => {
  const dispatch = useDispatch();
  const { tag } = useParams();

  const tagImages = useSelector((state) => state.imageReducer.tagImages);

  useEffect(() => {
    dispatch(getTagImages(tag));
  }, [dispatch, tag]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderImages = () => {
    return Object.values(tagImages).map((im) => (
      <div key={im.id}>
        <Link to={`/photos/tags/${tag}/${im.id}`}>
          <img src={im.url} className="images-on-display" alt="Images For Display" />
        </Link>
      </div>
    ));
  };

  return (
    <div className="background-for-tag-page">
      <div className="whole-tag-page-container">
        <div className="tag-header-div">
          <h3>{tag} tags selected</h3>
        </div>
        <div className="all-images-tag-page">{renderImages()}</div>
      </div>
    </div>
  );
};

export default TagResults;
