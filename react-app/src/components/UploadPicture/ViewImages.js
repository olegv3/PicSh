import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getAllImages } from "../../store/image";
import Footer from "../Footer/Footer";
import './ViewImage.css'
import { getImageByIdThunk } from "../../store/image";

const lightTheme = {
  backgroundColor: "#f7f7f7",
  color: "#333",
};

const darkTheme = {
  backgroundColor: "#333",
  color: "#f7f7f7",
};

const shuffle = (array) => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const ViewImages = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const imagesObj = useSelector(state => state);
  const allImages = Object.values(imagesObj.imageReducer.allImages);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const linkClick = (e, photoId) => {
    e.preventDefault();
    dispatch(getImageByIdThunk(photoId));
    setTimeout(() => {
      history.push(`/photos/${photoId}`);
    }, 500);
  };

  useEffect(() => {
    dispatch(getAllImages());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  shuffle(allImages);

  const imagesRef = useRef([]);

  const loadImages = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');
        img.setAttribute('src', src);
        observer.unobserve(img);
      }
    });
  };

  useEffect(() => {
    imagesRef.current = imagesRef.current.slice(0, allImages.length);

    const observer = new IntersectionObserver(loadImages, {
      rootMargin: '0px',
      threshold: 0.5,
    });

    imagesRef.current.forEach(image => observer.observe(image));

    return () => observer.disconnect();
  }, [allImages]);

  return (
    <div
      className="background-for-explore-page"
      style={theme === "light" ? lightTheme : darkTheme}
    >
      <div className="whole-explore-page-container">
        <div className="fix-position-container-mid-navbar">
          <div className="mid-navbar-explore-page">
            <Link className="links-on-mid-navbar-active" to='/photos'><span></span></Link>
            <Link className="links-on-mid-navbar-in-dev"><span></span></Link>
            <Link className="links-on-mid-navbar-in-dev"><span></span></Link>
            <button onClick={
              () => {
                toggleTheme();
              }
            } className="links-on-mid-navbar-in-dev"><img src="https://cdn-icons-png.flaticon.com/512/6077/6077095.png" alt="Theme Toggle" /></button>
          </div>
        </div>
        <div className="all-images-explore-page">
          {allImages.map((im, index) => (
            <div key={im.id}>
              <Link to={`/photos/${im.id}`} onClick={e => linkClick(e, im.id)}>
                <img
                  ref={el => (imagesRef.current[index] = el)}
                  data-src={im.url}
                  className='images-on-display'
                  alt='Images For Display'
                />
              </Link>
            </div>
          ))}
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default ViewImages;



        {/* </div>
        <div className="all-images-explore-page">
          {allImages.map((im, index) => (
            <div key={im.id}>
              <Link to={`/photos/${im.id}`} onClick={e => linkClick(e, im.id)}>
                <img
                  ref={el => (imagesRef.current[index] = el)}
                  data-src={im.url}
                  className='images-on-display'
                  alt='Images For Display'
                />
              </Link>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ViewImages; */}
