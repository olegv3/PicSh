import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Banner.css';

const currentUser = localStorage.getItem('currentUser'); // get current user from local storage

let defaultImageUrl = 'https://d3a5ukb11xbbmk.cloudfront.net/eclipse.jpeg'; // default image URL

const defaultImage = { url: defaultImageUrl }; // create default image object with URL based on user

const Banner = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images.length > 0 ? images[0] : defaultImage); // set current image to default image if no images available

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = images.indexOf(currentImage);
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[nextIndex]);
    }, 15000);
    return () => clearInterval(interval);
  }, [currentImage, images]);

  useEffect(() => {
    setCurrentImage(images.length > 0 ? images[0] : defaultImage); // set current image to default image if no images available
  }, [images]);

  return (
    <div className="banner">
      <img src={currentImage?.url} alt="" />
    </div>
  );
};



const mapStateToProps = (state) => ({
  images: Object.values(state.imageReducer.allImages),
});

export default connect(mapStateToProps)(Banner);
