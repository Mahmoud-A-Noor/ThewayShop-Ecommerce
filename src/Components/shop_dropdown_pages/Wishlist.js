import React from 'react';

import Header from '../about/Header'
import InstagramCarousel from '../home/Instagram_Carousel'


export default function Wishlist() {
    return (
        <div>
            <Header page={"Wishlist"} />
            <div id="wishlist">
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='table-responsive'>
                                <table className="table">
                                    <thead>
                                        <tr id='cart-table-header'>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <th>Unit Price</th>
                                            <th>Stock</th>
                                            <th>Add Item</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='cart-table-image'><img src="images/img-pro-01.jpg"/></td>
                                            <td className='cart-table-product-name'><a>Lorem ipsum dolor sit amet</a></td>
                                            <td className='cart-table-price'><p>$ 80.0</p></td>
                                            <td className='cart-table-price'><p>In Stock</p></td>
                                            <td className='cart-table-price'><a id="cart-summary-checkout" className='hvr-shutter-in-vertical'>Add to Cart</a></td>
                                            <td className='cart-table-delete-icon'><i className="fa-solid fa-x"></i></td>
                                        </tr>
                                        <tr>
                                            <td className='cart-table-image'><img src="images/img-pro-02.jpg"/></td>
                                            <td className='cart-table-product-name'><a>Lorem ipsum dolor sit amet</a></td>
                                            <td className='cart-table-price'><p>$ 80.0</p></td>
                                            <td className='cart-table-price'><p>In Stock</p></td>
                                            <td className='cart-table-price'><a id="cart-summary-checkout" className='hvr-shutter-in-vertical'>Add to Cart</a></td>
                                            <td className='cart-table-delete-icon'><i className="fa-solid fa-x"></i></td>
                                        </tr>
                                        <tr id="last-tr">
                                            <td className='cart-table-image'><img src="images/img-pro-03.jpg"/></td>
                                            <td className='cart-table-product-name'><a>Lorem ipsum dolor sit amet</a></td>
                                            <td className='cart-table-price'><p>$ 80.0</p></td>
                                            <td className='cart-table-price'><p>In Stock</p></td>
                                            <td className='cart-table-price'><a id="cart-summary-checkout" className='hvr-shutter-in-vertical'>Add to Cart</a></td>
                                            <td className='cart-table-delete-icon'><i className="fa-solid fa-x"></i></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <InstagramCarousel />
        </div>
    )
}