import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Banner.css';

const currentUser = localStorage.getItem('currentUser');

let defaultImageUrl = 'https://d3a5ukb11xbbmk.cloudfront.net/eclipse.jpeg';

const defaultImage = { url: defaultImageUrl };

const Banner = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(images.length > 0 ? images[0] : defaultImage);
  const [showDefaultImage, setShowDefaultImage] = useState(false);

  useEffect(() => {
    if (images.length > 0) {
      setCurrentIndex(Math.floor(Math.random() * images.length));
      setShowDefaultImage(false);
      const interval = setInterval(() => {
        setCurrentIndex(currentIndex => (currentIndex + 1) % images.length);
      }, 15000);
      return () => clearInterval(interval);
    } else {
      setShowDefaultImage(true);
    }
  }, [images]);


  useEffect(() => {
    setCurrentImage(images[currentIndex] || defaultImage);
  }, [currentIndex, images]);

  return (
    <div className="banner">
      {showDefaultImage ? (
        <img src={defaultImageUrl} alt="" />
      ) : (
        <img
          src={currentImage?.url}
          alt=""
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://www.tripwiremagazine.com/wp-content/uploads/2010/11/Fotolia.jpg';
          }}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  images: Object.values(state.imageReducer.allImages),
});

export default connect(mapStateToProps)(Banner);
