import React from 'react';

export default function Team() {
    return (
        <div id="team">
            <div className='container'>
                <h1>MEET OUR TEAM</h1>
                <div className='row'>
                    <div className='team-member col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div className='team-member-image position-relative'>
                            <img src="images/img-1.jpg" />
                                <ul id="team-overlay-icons" className=' list-unstyled position-absolute'>
                                    <li><a href="#"><i className="fa-brands fa-facebook position-absolute"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-twitter position-absolute"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-google-plus position-absolute"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-youtube position-absolute"></i></a></li>
                                </ul>
                            <div id="team-image-plus-icon" className=' position-absolute'>
                                <i className="fa fa-plus" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className='team-member-description'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}