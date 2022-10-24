import React from 'react';


import Header from '../about/Header'
import InstagramCarousel from '../home/Instagram_Carousel'
import Featured_Products_Product from "../home/Featured_Products_Product"

export default function Shopdetail() {

    let all_featured_produts = [
        {
            id: 1,
            image: "images/img-pro-01.jpg",
            price: "$7.79"
        },
        {
            id: 2,
            image: "images/img-pro-02.jpg",
            price: "$9.79"

        },
        {
            id: 3,
            image: "images/img-pro-03.jpg",
            price: "$10.79"
        },
        {
            id: 4,
            image: "images/img-pro-04.jpg",
            price: "$15.79"
        }
    ]

    let products = all_featured_produts.map((product) => {
        return (
            <div className='col-lg-3 col-md-6 col-sm-12 featured-product-card' key={product.id}>
                <Featured_Products_Product product={product}  />
            </div>
        );
    })

    return (
        <div id="shopdetail">
            <Header page={"Shop Detail"} />
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-5 col-lg-5 col-md-6'>
                        <div id="shopdetail-carousel">
                            <img className=' img-fluid' src="images/big-img-01.jpg"></img>
                            <div className='shopdetail-carousel-navigator'><i className="fa-solid fa-chevron-right"></i></div>
                            <div className='shopdetail-carousel-navigator'><i className="fa-solid fa-chevron-left"></i></div>
                            <div id="shopdetail-carousel-indicators-container" className='w-100 position-relative'>
                                <ul className='shopdetail-carousel-indicators'>
                                    <li className='shopdetail-carousel-indicator'>
                                        <img className="d-block img-fluid" src="images/smp-img-01.jpg" alt="" />
                                    </li>
                                    <li className='shopdetail-carousel-indicator'>
                                        <img className="d-block img-fluid" src="images/smp-img-02.jpg" alt="" />
                                    </li>
                                    <li className='shopdetail-carousel-indicator'>
                                        <img className="d-block img-fluid" src="images/smp-img-03.jpg" alt="" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-7 col-lg-7 col-md-6'>
                        <h2>Fachion Lorem ipsum dolor sit amet</h2>
                        <h5><del>$ 60.00</del> $40.29</h5>
                        <p id='shopdetail-stockavailable'>More than 20 available / <a href="#">8 sold</a></p>
                        <h4>Short Description:</h4>
                        <p className='shopdetail-subtitle'>Nam sagittis a augue eget scelerisque. Nullam lacinia consectetur sagittis. Nam sed neque id eros fermentum dignissim quis at tortor. Nullam ultricies urna quis sem sagittis pharetra. Nam erat turpis, cursus in ipsum at, tempor imperdiet metus. In interdum id nulla tristique accumsan. Ut semper in quam nec pretium. Donec egestas finibus suscipit. Curabitur tincidunt convallis arcu. </p>
                        <div id="shopdetail-productOrderDetail">
                            <div id="shopdetail-productOrderDetail-size" className='w-50'>
                                <label htmlFor="shopdetail-productOrderDetail-size-dropdown" className="form-label label">Size</label>
                                <select className="checkout-select" id="shopdetail-productOrderDetail-size-dropdown">
                                    <option value="Choose...">Size</option>
                                    <option value="United States">S</option>
                                    <option value="United States">M</option>
                                    <option value="United States">L</option>
                                    <option value="United States">XL</option>
                                    <option value="United States">XXL</option>
                                    <option value="United States">3XL</option>
                                    <option value="United States">4XL</option>
                                </select>
                            </div>
                            <div id="shopdetail-productOrderDetail-quantity" className='w-50'>
                                <label htmlFor="shopdetail-productOrderDetail-size-input" className="form-label label">Quantity</label>
                                <input type="number" className="form-control" id="shopdetail-productOrderDetail-size-input" placeholder="0" />
                            </div>
                        </div>
                        <div id="shopdetail-buyButtons" className='d-flex'>
                            <a href="#" className='shopdetail-button hvr-shutter-out-vertical'>Buy Now</a>
                            <a href="#" className='shopdetail-button hvr-shutter-out-vertical'>Add to cart</a>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 col-sm-12'> 
                                <div className='d-flex'>
                                    <a href="#" className='shopdetail-button hvr-shutter-out-vertical'><i className="fa-solid fa-heart"></i> Add to wishlist</a>
                                    <a href="#" className='shopdetail-button hvr-shutter-out-vertical'><i className="fa-sharp fa-solid fa-rotate"></i> Add to Compare</a>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12'>
                                <div className='d-flex justify-content-end align-items-center'>
                                    <a href="#" className='shopdetail-icon hvr-shutter-out-vertical'><i className="fa-brands fa-facebook"></i></a>
                                    <a href="#" className='shopdetail-icon hvr-shutter-out-vertical'><i className="fa-brands fa-square-google-plus"></i></a>
                                    <a href="#" className='shopdetail-icon hvr-shutter-out-vertical'><i className="fa-brands fa-twitter"></i></a>
                                    <a href="#" className='shopdetail-icon hvr-shutter-out-vertical'><i className="fa-brands fa-pinterest"></i></a>
                                    <a href="#" className='shopdetail-icon hvr-shutter-out-vertical'><i className="fa-brands fa-whatsapp"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="shopdetail-featuredProducts" className='row'>
                    <div className="title-all text-center">
                        <h1>Featured Products</h1>
                        <p className="shopdetail-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                    </div>
                    {products}
                </div>
                <div id="shopdetail-carousel-navigator" className='d-flex justify-content-center align-items-center'>
                    <a><i className="shopdetail-carousel-icon fa-solid fa-arrow-left"></i></a>
                    <a><i className="shopdetail-carousel-icon fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <InstagramCarousel />
        </div>
    )
}