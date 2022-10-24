import React from 'react';

export default function Footer() {
    return (
        <div>
            <div id="footer">
                <div id="footer-container">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-4 col-md-12 col-sm-12'>
                                <div className='d-flex flex-column'>
                                    <h4>About ThewayShop</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                    <div className='d-flex '>
                                        <a className='footer-contact-icon' href='#'>
                                            <i className="fab fa-facebook" aria-hidden="true"></i>
                                        </a>
                                        <a className='footer-contact-icon' href='#'>
                                            <i className="fab fa-twitter" aria-hidden="true"></i>
                                        </a>
                                        <a className='footer-contact-icon' href='#'>
                                            <i className="fab fa-linkedin" aria-hidden="true"></i>
                                        </a>
                                        <a className='footer-contact-icon' href='#'>
                                            <i className="fab fa-google-plus" aria-hidden="true"></i>
                                        </a>
                                        <a className='footer-contact-icon' href='#'>
                                            <i className="fa fa-rss" aria-hidden="true"></i>
                                        </a>
                                        <a className='footer-contact-icon' href='#'>
                                            <i className="fab fa-pinterest-p" aria-hidden="true"></i>
                                        </a>
                                        <a className='footer-contact-icon' href='#'>
                                            <i className="fab fa-whatsapp" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-12 col-sm-12'>
                                <div className='d-flex flex-column'>
                                    <h4>Information</h4>
                                    <ul className=' list-unstyled'>
                                        <li>About Us</li>
                                        <li>Customer Service</li>
                                        <li>Our Sitemap</li>
                                        <li>Terms & Conditions</li>
                                        <li>Privacy Policy</li>
                                        <li>Delivery Information</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-12 col-sm-12'>
                                <div className='d-flex flex-column'>
                                    <h4>Contact Us</h4>
                                    <div className=' d-flex align-items-start justify-content-start position-relative'>
                                        <i className="fa fa-map-marker contact_us-icon position-absolute" aria-hidden="true"></i>
                                        <p className='px-4'>
                                            Address: Michael I. Days 3756 <br/>
                                            Preston Street Wichita, <br/>
                                            KS 67213
                                        </p>
                                    </div>
                                    <div className=' d-flex align-items-start justify-content-start position-relative'>
                                        <i className="fas fa-phone-square contact_us-icon position-absolute" aria-hidden="true"></i>
                                        <p className='px-4'>
                                            Phone: <span>+1-888 705 770</span>
                                        </p>
                                    </div>
                                    <div className=' d-flex align-items-start justify-content-start position-relative'>
                                        <i className="fas fa-envelope contact_us-icon position-absolute" aria-hidden="true"></i>
                                        <p className='px-4'>
                                            Email: <span>contactinfo@gmail.com</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer-copyright" className='d-flex align-items-center justify-content-center'>
                <p>
                    All Rights Reserved. © 2018 ThewayShop Design By : html design
                </p>
            </div>
        </div>
    )
}