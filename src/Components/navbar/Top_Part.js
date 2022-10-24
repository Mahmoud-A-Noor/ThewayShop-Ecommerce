import React from 'react';
import { useState, useEffect } from 'react';

export default function Top_Part({toggleSearchBox}) {

    const [offer, setOffer] = useState('Off 50%! Shop Now')

    let offers = [
        '20% off Entire Purchase Promo code: offT20',
        'Off 10%! Shop Now Man',
        '50% - 80% off on Fashion',
        'Off 50%! Shop Now',
        'Off 10%! Shop Now Man',
        '50% - 80% off on Fashion',
        '20% off Entire Purchase Promo code: offT20',
        'Off 50%! Shop Now'
    ];
    let counter = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            let offer_element = document.getElementById("offer")
            offer_element.style.animationName = "top-nav-animation"
            offer_element.style.display = "none"
            setTimeout(() => {                
                offer_element.style.animationName = "top-nav-animation-2"
                setOffer(offers[counter])
                offer_element.style.display = "flex"
            }, 1000);
            counter += 1;
            if (counter >= offers.length)
                counter = 0;
        }, 3000);
        return () => clearInterval(interval);
      }, []);

    return (
        <div id="top-part" className=''>
                <div id="nav-top" className='row m-0  bg-dark py-3'>
                    <div id="offer" className='col-md-6 col-12 d-flex align-items-center'>
                        <i className="fa-brands fa-opencart ms-4"></i>
                        <span id="nav-top-offers" className='ms-3'>{offer}</span>
                    </div>
                    <div className='col-md-6 col-12 d-flex align-items-center justify-content-end bg-dark' id="nav-top-right">
                        <ul className='d-flex align-items-center' id="nav-top-links">
                            <li>MY ACCOUNT</li><span className='mx-3'>|</span>
                            <li>OUR LOCATION</li><span className='mx-3'>|</span>
                            <li>CONTACT US</li>
                        </ul>
                        <div className='d-flex align-items-center ms-4' id="nav-top-contact">
                            <span>Call US: +11 900 800 100</span>
                            <div className="btn-group ms-2">
                                <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                ¥ JPY
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">$ USD</a></li>
                                    <li><a className="dropdown-item" href="#">€ EUR</a></li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div id="search-box" className=' d-flex align-items-center justify-content-center position-absolute d-none'>
                    <i className="fa fa-search text-white" aria-hidden="true"></i>
                    <input id="search-input" type="text" placeholder="Search" className='w-75 mx-3 bg-black border-0 text-white' />
                    <i className="fa-solid fa-x text-white cursor" onClick={toggleSearchBox}></i>
                </div>
            </div>
    )
}