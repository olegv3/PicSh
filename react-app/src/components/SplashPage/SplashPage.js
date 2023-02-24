import { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import './SplashPage.css'


function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}


const images = importAll(require.context('../../assets/SplashPageImages', false, /\.(png|jpe?g|svg)$/));
const splashPageImages = Object.values(images)

const SplashPage = () => {
    const history = useHistory();
    const [arrImages, setArrTitles] = useState("SlideshowStart");

    const sessionUser = useSelector(state => state.session.user)


    const startForFree = (e) => {
        e.preventDefault()
        return history.push('/sign-up')
    }

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * splashPageImages.length);
        setArrTitles(splashPageImages[index].default);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 5000);
        return () => clearInterval(intervalID);
    }, [shuffle])


    if (sessionUser) history.push('/photos')

    return (
        <>
            <div className='whole-splash-page-container'>
                <div className='slideshow-container'>
                    <div className='overlay-text-splash-page'>
                        <div className='center-page-text-container'>
                            <h1>Find your inspiration.</h1>
                            <div className='span-tags-in-center-page'>
                                <span>Join the PicShr community, home to 10</span>
                                <span>photos and 1 group.</span>
                            </div>
                            <button className='center-page-sign-up-button' onClick={event => startForFree(event)}>Start for free</button>
                        </div>
                    </div>
                    <img src={arrImages} className='slideshow-splash-page' alt='' />
                </div>
                <div className='footer-splash-page'>
                    <div className='top-half-of-footer-splash'>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SplashPage
