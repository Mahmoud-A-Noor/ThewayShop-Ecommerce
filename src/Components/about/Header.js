import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({page}) {
    return (
        <div id="about-header">
            <div id="about-header-text-container" className=' d-flex flex-column justify-content-center align-items-center w-100 h-100'>
                <p>{page}</p>
                <div id="about-header-button">
                    <Link id="about-header-button-home-link" to='/'>Home</Link><span> / {page}</span>
                </div>
            </div>
        </div>
    )
}