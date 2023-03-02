import { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './SplashPage.css';

const importAll = (r) => {
  const images = {};
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));
const splashPageImages = Object.values(images);

const SplashPage = () => {
  const history = useHistory();
  const [arrImages, setArrTitles] = useState(splashPageImages[1].default);

  const sessionUser = useSelector((state) => state.session.user);

  const startForFree = (e) => {
    e.preventDefault();
    history.push('/sign-up');
  };

  const shuffle = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * splashPageImages.length);
    setArrTitles(splashPageImages[randomIndex].default);
  }, [splashPageImages]);

  useEffect(() => {
    const interval = setInterval(() => {
      shuffle();
    }, 6000);
    return () => clearInterval(interval);
  }, [shuffle]);

  useEffect(() => {
    if (sessionUser) {
      history.push('/photos');
    }
  }, [sessionUser, history]);

  return (
    <div className="whole-splash-page-container">
      <div className="slideshow-container">
        <div className="overlay-text-splash-page">
          <div className="center-page-text-container">
            <h1>Find your inspiration.</h1>
            <div className="span-tags-in-center-page">
              <span>Join the Picshr community, home to dozens of</span>
              <span>photos and 1 group.</span>
            </div>
            <button className="center-page-sign-up-button" onClick={startForFree}>
              Start for free
            </button>
          </div>
        </div>
        <img src={arrImages} className="slideshow-splash-page" alt="Slideshow images" />
      </div>
      <div className="footer-splash-page">
        <div className="top-half-of-footer-splash"></div>
        <div className="border-middle-footer-splash"></div>
        <div className="bottom-half-of-footer-splash">
          <div className="left-side-bottom-footer-splash"></div>
          <div className="middle-side-bottom-footer-splash"></div>
          <div className="right-side-bottom-footer-splash"></div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SplashPage;
