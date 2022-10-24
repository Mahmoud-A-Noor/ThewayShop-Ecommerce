import React from 'react'

import Header from '../about/Header'
import InstagramCarousel from '../home/Instagram_Carousel'

export default function Cart() {
    return (
        <div>
            <Header page={"Cart"} />
            <div id="cart">
                <div id="cart-table">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='table-responsive'>
                                    <table className="table">
                                        <thead>
                                            <tr id='cart-table-header'>
                                                <th>Image</th>
                                                <th>Product Name</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className='cart-table-image'><img src="images/img-pro-01.jpg"/></td>
                                                <td className='cart-table-product-name'><a>Lorem ipsum dolor sit amet</a></td>
                                                <td className='cart-table-price'><p>$ 80.0</p></td>
                                                <td className='cart-table-input'><input type="number" /></td>
                                                <td className='cart-table-price'><p>$ 80.0</p></td>
                                                <td className='cart-table-delete-icon'><i className="fa-solid fa-x"></i></td>
                                            </tr>
                                            <tr>
                                                <td className='cart-table-image'><img src="images/img-pro-02.jpg"/></td>
                                                <td className='cart-table-product-name'><a>Lorem ipsum dolor sit amet</a></td>
                                                <td className='cart-table-price'><p>$ 80.0</p></td>
                                                <td className='cart-table-input'><input type="number" /></td>
                                                <td className='cart-table-price'><p>$ 80.0</p></td>
                                                <td className='cart-table-delete-icon'><i className="fa-solid fa-x"></i></td>
                                            </tr>
                                            <tr id="last-tr">
                                                <td className='cart-table-image'><img src="images/img-pro-03.jpg"/></td>
                                                <td className='cart-table-product-name'><a>Lorem ipsum dolor sit amet</a></td>
                                                <td className='cart-table-price'><p>$ 80.0</p></td>
                                                <td className='cart-table-input'><input type="number" /></td>
                                                <td className='cart-table-price'><p>$ 80.0</p></td>
                                                <td className='cart-table-delete-icon'><i className="fa-solid fa-x"></i></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div id="cart-coupon" className='col-lg-6 col-sm-12 d-flex'>
                                <input className=' flex-grow-1' type="text" placeholder="Enter Your Coupon Code" />
                                <button className='cart-button'>Apply Coupon</button>
                            </div>
                            <div id="cart-update-cart" className='col-lg-6 col-sm-12'>
                                <button className='cart-button'>Update Cart</button>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-8 col-sm-12'></div>
                            <div id="cart-summary" className='col-lg-4 col-sm-12'>
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
                                    <a id="cart-summary-checkout" className='hvr-shutter-out-vertical cursor'>Checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="cart-summary">

                </div>
            </div>
            <InstagramCarousel />
        </div>
    )
}