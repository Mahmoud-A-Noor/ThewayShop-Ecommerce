import React from 'react';
import {useEffect, useState} from 'react';

export default function Instagram_Carousel() {

    let end = 0;
    const [start, setStart] = useState(0);
    const [instagram_carousel_items, setInstagram_carousel_items] = useState([]);
    
    function show_overlay(e){
        let instagram_carousel_content_item = e.target.closest('.instagram-carousel-content-item');
        let overlay = instagram_carousel_content_item.querySelector('.instagram-carousel-image-overlay')
        overlay.style.animationName = 'instagram-carousel-overlay';
        overlay.classList.remove('d-none');
    }

    function hide_overlay(e){
        let instagram_carousel_content_item = e.target.closest('.instagram-carousel-content-item');
        let overlay = instagram_carousel_content_item.querySelector('.instagram-carousel-image-overlay')
        overlay.style.animationName = 'instagram-carousel-overlay-2';
        setTimeout(() => {
            overlay.classList.add('d-none');
        }, 1000);
    }


    function carosel(forward){

        let s = start + forward;
        if (s < 0)
            s = 8;
        if (s > 8)
            s = 0;

        if (document.body.offsetWidth <= 450)
            end = (s+2)%9
        else if(document.body.offsetWidth <= 990)
            end = (s+4)%9
        else
            end = (s+8)%9
    

        let elements = []
        
        for (let i = s; i != end; i = (i+1)%9) {
            elements.push(
                <div className="instagram-carousel-content-item position-relative" onMouseEnter={e=>(show_overlay(e))} onMouseLeave={e=>(hide_overlay(e))} key={i+1}>
                    <img src={`images/instagram-img-0${i+1}.jpg`} />
                    <div className='d-flex justify-content-center align-items-center instagram-carousel-image-overlay position-absolute d-none'>
                        <a href='#'>
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            ) 
        }
        setInstagram_carousel_items(elements)
        setStart((start+1)%9);
    }

    useEffect(() => {
        let instagram_carousel_interval = setInterval(() => {
            carosel(0);
        }, 3000);

        return () => {
            clearInterval(instagram_carousel_interval);
        }
    },[start]);

    return (
        <div id="instagram-carousel">
            <div id="instagram-carousel-container" className='d-flex align-items-center justify-content-center'>
                <div id="instagram-carousel-left-button" className='instagram-carousel-button d-flex align-items-center justify-content-center' onClick={()=>{carosel(1)}}>
                    <i className="fa-solid fa-arrow-left"></i>
                </div>
                <div id="instagram-carousel-content" className=' d-flex'>
                    {instagram_carousel_items}
                </div>
                <div id="instagram-carousel-right-button" className='instagram-carousel-button d-flex align-items-center justify-content-center' onClick={()=>{carosel(-1)}}>
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>
    )
}