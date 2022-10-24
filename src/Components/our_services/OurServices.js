import React from 'react';
import Header from '../about/Header';
import SkillInfo from '../about/SkillInfo';
import Team from '../about/Team';
import InstagramCarousel from '../home/Instagram_Carousel';

export default function OurServices() {
    return (
        <div id="our-services">
            <Header page={"Our Services"} />
            <SkillInfo skills={["OUR MISSION", "OUR VISION", "OUR PHILOSOPHY", "WE ARE TRUSTED", "WE ARE PROFESSIONAL", "WE ARE EXPERT"]} />
            <Team />
            <InstagramCarousel />
        </div>
    )
}