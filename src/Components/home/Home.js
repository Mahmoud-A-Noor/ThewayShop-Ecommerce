import React from 'react';
import {useEffect, useState} from 'react'; 
import Carosel from './Carosel';
import Categories from './Categories';
import Featured_Products from './Featured_Products';
import Latest_Blogs from './Latest_Blogs';
import Instagram_Carousel from './Instagram_Carousel';

export default function Home() {

    useEffect(() => {
        // var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        // var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        // return new bootstrap.Tooltip(tooltipTriggerEl)
        // })

    }, []);

    return (
        <div id="home">
            <Carosel />
            <Categories />
            <Featured_Products />
            <Latest_Blogs />
            <Instagram_Carousel />
        </div>
    );
}