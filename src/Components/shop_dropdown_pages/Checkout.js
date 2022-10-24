import React from 'react';
import Header from '../about/Header';
import InstagramCarousel from '../home/Instagram_Carousel';

export default function Checkout() {
    return (
        <div>
            <Header page={"Checkout"} />
            <div id="checkout">
                <div className='container'>
                    <div className='row'>
                        <div id="checkout-login" className='col-lg-6 col-sm-12'>
                            <h3 className='checkout-h3 checkout-thick-border'>Account Login</h3>
                            <h3 className='checkout-h3 mb-3'><a data-bs-toggle="collapse" href="#checkout-login-form" role="button">Click here to Login</a></h3>
                            <div className="collapse" id="checkout-login-form">
                                <div className='row'>
                                    <div className='col-lg-6 col-sm-12'>
                                        <label className='label' htmlFor="checkout-login-email">Email Address</label>
                                        <input className='checkout-input' type="email" id="checkout-login-email" />
                                    </div>
                                    <div className='col-lg-6 col-sm-12'>
                                        <label className='label' htmlFor="checkout-login-password">Password</label>
                                        <input className='checkout-input' type="password" id="checkout-login-password" />
                                    </div>
                                </div>
                                <a className='hvr-shutter-out-vertical'>Login</a>
                            </div>
                        </div>
                        <div id="checkout-register" className='col-lg-6 col-sm-12'>
                            <h3 className='checkout-h3 checkout-thick-border'><a>Create New Account</a></h3>
                            <h3 className='checkout-h3'><a data-bs-toggle="collapse" href="#checkout-register-form" role="button">Click here to Register</a></h3>
                            <div className="collapse" id="checkout-register-form">
                            <div className='row'>
                                    <div className='col-lg-6 col-sm-12'>
                                        <label className='label' htmlFor="checkout-register-firstname">First Name</label>
                                        <input className='checkout-input' type="email" id="checkout-register-firstname" />
                                    </div>
                                    <div className='col-lg-6 col-sm-12'>
                                        <label className='label' htmlFor="checkout-register-lastname">Last Name</label>
                                        <input className='checkout-input' type="password" id="checkout-register-lastname" />
                                    </div>
                                    <div className='col-lg-6 col-sm-12'>
                                        <label className='label' htmlFor="checkout-register-email">Email Address</label>
                                        <input className='checkout-input' type="email" id="checkout-register-email" />
                                    </div>
                                    <div className='col-lg-6 col-sm-12'>
                                        <label className='label' htmlFor="checkout-register-password">Password</label>
                                        <input className='checkout-input' type="password" id="checkout-register-password" />
                                    </div>
                                </div>
                                <a className='hvr-shutter-out-vertical'>Login</a>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-12'>
                            <h3 className='checkout-h3 checkout-thick-border'>Billing address</h3>
                            <div id="checkout-billing-info">
                                <form>
                                    <div className='row'>
                                        <div className='col-lg-6 col-sm-12'>
                                            <label htmlFor="checkout-billing-address-firstname" className='form-label label'>First Name *</label>
                                            <input className='checkout-input' type="text" id="checkout-billing-address-firstname" />
                                        </div>
                                        <div className='col-lg-6 col-sm-12'>
                                            <label htmlFor="checkout-billing-address-lastname" className='form-label label'>Last Name *</label>
                                            <input className='checkout-input' type="text" id="checkout-billing-address-lastname" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="checkout-billing-address-username" className='form-label label'>Username *</label>
                                        <input className='checkout-input' type="text" id="checkout-billing-address-username" />
                                    </div>
                                    <div>
                                        <label htmlFor="checkout-billing-address-email" className='form-label label'>Email Address *</label>
                                        <input className='checkout-input' type="email" id="checkout-billing-address-email" />
                                    </div>
                                    <div>
                                        <label htmlFor="checkout-billing-address" className='form-label label'>Address *</label>
                                        <input className='checkout-input' type="text" id="checkout-billing-address" />
                                    </div>
                                    <div>
                                        <label htmlFor="checkout-billing-address" className='form-label label'>Address 2 *</label>
                                        <input className='checkout-input' type="text" id="checkout-billing-address" />
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-5 col-sm-12'>
                                            <label htmlFor="checkout-billing-address-country" className='form-label label'>Country *</label>
                                            <select className='checkout-select' id="checkout-billing-address-country">
                                                <option value="Choose...">Choose...</option>
                                                <option value="United States">United States</option>
                                            </select>
                                        </div>
                                        <div className='col-lg-4 col-sm-12'>
                                            <label htmlFor="checkout-billing-address-state" className='form-label label'>State *</label><br/>
                                            <select className='checkout-select' id="checkout-billing-address-state">
                                                <option value="Choose...">Choose...</option>
                                                <option value="United States">Calefornia</option>
                                            </select>
                                        </div>
                                        <div className='col-lg-3 col-sm-12'>
                                            <label htmlFor="checkout-billing-address-zip" className='form-label label'>Zip *</label>
                                            <input className='checkout-input' type="text" id="checkout-billing-address-zip" />
                                        </div>
                                    </div>
                                </form>
                                <hr className='mb-4'/>
                            </div>
                            <div id="checkout-billing-address">
                                <input className='checkout-checkbox' type="checkbox" />
                                <span className='ps-2 larger-label'>Shipping address is the same as my billing address</span><br/>
                                <input className='checkout-checkbox' type="checkbox" />
                                <span className='ps-2 larger-label'>Save this information for next time</span>
                            </div>
                            <hr className='mb-4'/>
                            <div id="checkout-payment">
                                <p className='label mb-3'>Payment</p>
                                <input className='checkout-radio' type="radio" name="payment" />
                                <span className='ps-2 larger-label'>Credit card</span><br/>
                                <input className='checkout-radio' type="radio" name="payment" />
                                <span className='ps-2 larger-label'>Debit card</span><br/>
                                <input className='checkout-radio' type="radio" name="payment" />
                                <span className='ps-2 larger-label'>Paypal</span><br/>

                                <div className='row mt-3'>
                                    <div className='col-lg-6 col-sm-12'>
                                        <label htmlFor="checkout-payment-NameOnCard" className='form-label label'>Name On Card</label>
                                        <input className='checkout-input' type="text" id="checkout-payment-NameOnCard" />
                                    </div>
                                    <div className='col-lg-6 col-sm-12'>
                                        <label htmlFor="checkout-payment-CardNumber" className='form-label label'>Credit card number</label>
                                        <input className='checkout-input' type="text" id="checkout-payment-CardNumber" />
                                    </div>
                                </div>
                                <div className='row justify-content-center align-items-center'>
                                    <div className='col-lg-3 col-sm-12'>
                                        <label htmlFor="checkout-payment-Expiration" className='form-label label'>Expiration</label>
                                        <input className='checkout-input' type="text" id="checkout-payment-Expiration" />
                                    </div>
                                    <div className='col-lg-3 col-sm-12'>  
                                        <label htmlFor="checkout-payment-CVV" className='form-label label'>CVV</label>
                                        <input className='checkout-input' type="text" id="checkout-payment-CVV" />
                                    </div>
                                    <div id="checkout-payment-icons" className="col-lg-6 col-sm-12">
                                        <ul className='list-unstyled d-flex'>
                                            <li><img className="img-fluid" src="images/payment-icon/1.png" alt=""/></li>
                                            <li><img className="img-fluid" src="images/payment-icon/2.png" alt=""/></li>
                                            <li><img className="img-fluid" src="images/payment-icon/3.png" alt=""/></li>
                                            <li><img className="img-fluid" src="images/payment-icon/5.png" alt=""/></li>
                                            <li><img className="img-fluid" src="images/payment-icon/7.png" alt=""/></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12'>
                            <div id="checkout-shipping-method">
                                <h3 className='checkout-h3 checkout-thick-border'>Shipping Method</h3>
                                <div id="shipping-methods">
                                    <div className='shipping-method'>
                                        <div className='d-flex'>
                                            <div>
                                                <input className='checkout-radio' type="radio" name="shipping-method" />
                                                <span className='ps-2 larger-label'>Standard Delivery</span><br/>
                                            </div>
                                            <div className='ms-auto'>
                                                <span className='shipping-methods-label'>Free</span>
                                            </div>
                                        </div>
                                        <small>(3-7 business days)</small>
                                    </div>
                                    <div className='shipping-method'>
                                        <div className='d-flex'>
                                            <div>
                                                <input className='checkout-radio' type="radio" name="shipping-method" />
                                                <span className='ps-2 larger-label'>Express Delivery</span><br/>
                                            </div>
                                            <div className='ms-auto'>
                                                <span className='shipping-methods-label'>$ 10.00</span>
                                            </div>
                                        </div>
                                        <small>(2-4 business days)</small>
                                    </div>
                                    <div className='shipping-method'>
                                        <div className='d-flex'>
                                            <div>
                                                <input className='checkout-radio' type="radio" name="shipping-method" />
                                                <span className='ps-2 larger-label'>Next Business day</span><br/>
                                            </div>
                                            <div className='ms-auto'>
                                                <span className='shipping-methods-label'>$ 20.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div id="checkout-shopping-cart">
                                <h3 className='checkout-h3 checkout-thick-border'>Shopping cart</h3>
                                <div id="checkout-shopping-cart-items">
                                    <div className='checkout-shopping-cart-item'>
                                        <p>Lorem ipsum dolor sit amet</p>
                                        <small>Price: $80.00 | Qty: 1 | Subtotal: $80.00</small>
                                    </div>
                                    <div className='checkout-shopping-cart-item'>
                                        <p>Lorem ipsum dolor sit amet</p>
                                        <small>Price: $60.00 | Qty: 1 | Subtotal: $60.00</small>
                                    </div>
                                    <div className='checkout-shopping-cart-item'>
                                        <p>Lorem ipsum dolor sit amet</p>
                                        <small>Price: $40.00 | Qty: 1 | Subtotal: $40.00</small>
                                    </div>
                                </div>
                            </div>
                            <div id="checkout-order">
                                <h3 className='checkout-h3 checkout-thick-border'>Your order</h3>
                                <div id="cart-summary" className='pt-3'>
                                    <h3>Order Summary</h3>
                                    <div className='d-flex align-items-center justify-content-between py-1'>
                                        <h4>Subtotal</h4>
                                        <span>$ 130</span>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between py-1 border-bottom'>
                                        <h4>Discount</h4>
                                        <span>$ 40</span>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between py-1'>
                                        <h4>Coupon Discount</h4>
                                        <span>$ 10</span>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between py-1'>
                                        <h4>Tax</h4>
                                        <span>$ 2</span>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between py-1 border-bottom'>
                                        <h4>Shipping Cost</h4>
                                        <span>Free</span>
                                    </div>
                                    <div id="grand-total" className='d-flex align-items-center justify-content-between py-4 border-bottom'>
                                        <h3>Grand Total</h3>
                                        <span>$ 388</span>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-end'>
                                        <a id="cart-summary-checkout" className='hvr-shutter-out-vertical cursor'>Place Order</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <InstagramCarousel />
        </div>
    );
}