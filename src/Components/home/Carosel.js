import React from 'react';
import { useEffect } from 'react';


export default function Home() {

    let carouselIndex = 0;
    const carouselTextPositionClasses = ["align-items-start", "align-items-center", "align-items-end"]

    function carosel_navigate(forward) {
        let carouselTextContainer = document.getElementById('carousel-text-container');

        carouselTextContainer.classList.remove(carouselTextPositionClasses[carouselIndex]);
        if (forward)
            carouselIndex++;
        else
            carouselIndex--;

        if (carouselIndex > 2)
            carouselIndex = 0;
        if (carouselIndex < 0)
            carouselIndex = 2;
        carouselTextContainer.classList.add(carouselTextPositionClasses[carouselIndex]);

        let indicators = document.getElementsByClassName('indicator');
        for (let i = 0; i < indicators.length; i++) {
            if (i === carouselIndex) {
                indicators[i].classList.add('bg-danger');
            }

            else {
                indicators[i].classList.remove('bg-danger');
            }
        }
        let home_carousel = document.getElementById('home-carousel');
        home_carousel.style.animationName = "carosel-animation"
        home_carousel.style.backgroundImage = `url(../images/banner-0${carouselIndex + 1}.jpg)`
        setTimeout(() => {
            home_carousel.style.animationName = "none"
        }, 1000);
    }
    let carousel_interval;
    useEffect(() => {
        carousel_interval = setInterval(() => {
            carosel_navigate(true);
        }, 3000);

        return () => {
            clearInterval(carousel_interval);
        }
    }, []);

    function carousel_navigate_left() {
        clearInterval(carousel_interval);
        carosel_navigate(false);
        carousel_interval = setInterval(() => {
            carosel_navigate(true);
        }, 3000);
    }

    function carousel_navigate_right() {
        clearInterval(carousel_interval);
        carosel_navigate(true);
        carousel_interval = setInterval(() => {
            carosel_navigate(true);
        }, 3000);
    }

    return (
        <div id="home-carousel" >
            <div id="overlay" className=' d-flex'>
                <div className='d-flex flex-column align-items-center justify-content-center h-100'>
                    <div id='carousel-button-left' className='arrow-icon bg-danger cursor' onClick={carousel_navigate_left}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </div>
                </div>
                <div className='d-flex flex-column w-100 p-3'>
                    <div id="carousel-text-container" className='d-flex flex-column justify-content-center align-items-start h-100 w-100'>
                        <h1>Welcome To</h1>
                        <h1>Thewayshop</h1>
                        <p>See how your users experience your website in realtime or view </p>
                        <p>trends to see any changes in performance over time.</p>
                        <a href='#' className='hvr-shutter-in-vertical'>Shop Now</a>
                    </div>
                    <div className='d-flex align-items-end justify-content-center'>
                        <div className='indicator bg-danger'></div>
                        <div className='indicator'></div>
                        <div className='indicator'></div>
                    </div>
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center h-100'>
                    <div id='carousel-button-right' className='arrow-icon bg-danger cursor' onClick={carousel_navigate_right}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
            </div>
            
        </div>
    )
}