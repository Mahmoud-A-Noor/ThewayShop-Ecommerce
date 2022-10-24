import React from 'react';

export default function MyAccount() {
    return (
        <div id="myaccount">
            <div className='container'>
                <div id="account-services" className='row gy-3'>
                    <div className='account-block col-lg-4 col-md-6 col-xs-12'>
                        <div className='col-border'>
                            <div className='account-service-icon'>
                                <a href="#"><i className="fa-solid fa-gift"></i></a>
                            </div>
                            <h3 className='account-underline-text'>Your Orders</h3>
                            <p>Track, return, or buy things again</p>
                        </div>
                    </div>
                    <div className='account-block col-lg-4 col-md-6 col-xs-12'>
                        <div className='col-border'>
                            <div className='account-service-icon'>
                                <a href='#'><i className="fa-solid fa-lock"></i></a>
                            </div>
                            <h3 className='account-underline-text'>Login & security</h3>
                            <p>Edit login, name, and mobile number</p>
                        </div>
                    </div>
                    <div className='account-block col-lg-4 col-md-6 col-xs-12'>
                        <div className='col-border'>
                            <div className='account-service-icon'>
                                <a href='#'><i className="fa-solid fa-location-arrow"></i></a>
                            </div>
                            <h3 className='account-underline-text'>Your Addresses</h3>
                            <p>Edit addresses for orders and gifts</p>
                        </div>
                    </div>
                    <div className='account-block col-lg-4 col-md-6 col-xs-12'>
                        <div className='col-border'>
                            <div className='account-service-icon'>
                                <a href='#'><i className="fa-solid fa-credit-card"></i></a>
                            </div>
                            <h3 className='account-underline-text'>Payment options</h3>
                            <p>Edit or add payment methods</p>
                        </div>
                    </div>
                    <div className='account-block col-lg-4 col-md-6 col-xs-12'>
                        <div className='col-border'>
                            <div className='account-service-icon'>
                                <a href='#'><i className="fa-brands fa-paypal"></i></a>
                            </div>
                            <h3 className='account-underline-text'>PayPal</h3>
                            <p>View benefits and payment settings</p>
                        </div>
                    </div>
                    <div className='account-block col-lg-4 col-md-6 col-xs-12'>
                        <div className='col-border'>
                            <div className='account-service-icon'>
                                <a href='#'><i className="fa-brands fa-amazon"></i></a>
                            </div>
                            <h3 className='account-underline-text'>Amazon Pay balance</h3>
                            <p>Add money to your balance</p>
                        </div>
                    </div>
                </div>
                <div id="account-categories" className='row gy-3'>
                    <div className='account-block col-lg-4 col-md-6 col-xs-12'>
                        <div className='col-border'>
                            <h3 className='account-underline-text'>Gold & Diamond Jewellery</h3>
                            <ul className=' list-unstyled'>
                                <li><a href='#'>Apps and more</a></li>
                                <li><a href='#'>Content and devices</a></li>
                                <li><a href='#'>Music settings</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='account-block col-lg-4 col-md-6 col-xs-12'>
                        <div className='col-border'>
                            <h3 className='account-underline-text'>Handloom & Handicraft Store</h3>
                            <ul className=' list-unstyled'>
                                <li><a href='#'>Advertising preferences</a></li>
                                <li><a href='#'>Communication preferences</a></li>
                                <li><a href='#'>SMS alert preferences</a></li>
                                <li><a href='#'>Message center</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='account-block col-lg-4 col-md-6 col-xs-12'>
                        <div className='col-border'>
                            <h3 className='account-underline-text'>The Designer Boutique</h3>
                            <ul className=' list-unstyled'>
                                <li><a href='#'>Amazon Pay</a></li>
                                <li><a href='#'>Bank accounts for refunds</a></li>
                                <li><a href='#'>Coupons</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='account-block col-lg-4 col-md-6 col-xs-12'>
                        <div className='col-border'>
                            <h3 className='account-underline-text'>Gift Boxes, Gift Tags, Greeting Cards</h3>
                            <ul className=' list-unstyled'>
                                <li><a href='#'>Leave delivery feedback</a></li>
                                <li><a href='#'>Lists</a></li>
                                <li><a href='#'>Photo ID proofs</a></li>
                                <li><a href='#'>Profile</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='account-block col-lg-4 col-md-6 col-xs-12'>
                        <div className='col-border'>
                            <h3 className='account-underline-text'>Other accounts</h3>
                            <ul className=' list-unstyled'>
                                <li><a href='#'>Amazon Business registration</a></li>
                                <li><a href='#'>Seller account</a></li>
                                <li><a href='#'>Amazon Web Services</a></li>
                                <li><a href='#'>Login with Amazon</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='account-block col-lg-4 col-md-6 col-xs-12'>
                        <div className='col-border'>
                            <h3 className='account-underline-text'>Shopping programs and rentals</h3>
                            <ul className=' list-unstyled'>
                                <li><a href='#'>Subscribe & Save</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}