import React from 'react';
import Header from './Header';
import Info from './Info';
import Team from './Team';
import InstagramCarousel from '../home/Instagram_Carousel';

export default function About() {
    return (
        <div id="about">
            <Header page={"ABOUT US"} />
            <Info />
            <Team />
            <InstagramCarousel />
        </div>
    )
}