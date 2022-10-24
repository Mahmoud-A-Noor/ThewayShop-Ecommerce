import React from 'react';
import { Link } from 'react-router-dom';

export default function Bottom_Part({toggleSearchBox}) {

    function HandleProductMenueMouseEnter(){
        let product_menu = document.getElementById("product-menu")
        product_menu.style.animationName = "menu-animation"
        product_menu.classList.remove("d-none")
    }

    function HandleProductMenueMouseLeave(){
        let product_menu = document.getElementById("product-menu")
        product_menu.style.animationName = "menu-animation-2"
        setTimeout(() => {
            if(product_menu.classList.contains("sure"))
                product_menu.classList.remove("sure")
            else{
                product_menu.classList.add("d-none")
            }
        }, 1500);
    }

    function HandleProductMenueMouseEnter2(){
        let product_menu = document.getElementById("product-menu")
        if(!product_menu.classList.contains("d-none")){
            product_menu.classList.add("sure")
            product_menu.style.animationName = "menu-animation"
            product_menu.classList.add("d-none")
            product_menu.classList.remove("d-none")
        }
    } 

    function HandleShopMenueMouseEnter(){
        let shop_menu = document.getElementById("shop-menu")
        shop_menu.style.animationName = "menu-animation"
        shop_menu.classList.remove("d-none")
    }

    function HandleShopMenueMouseLeave(){
        let shop_menu = document.getElementById("shop-menu")
        shop_menu.style.animationName = "menu-animation-2"
        setTimeout(() => {
            if(shop_menu.classList.contains("sure"))
                shop_menu.classList.remove("sure")
            else{
                shop_menu.classList.add("d-none")
            }
        }, 1500);
    }

    function HandleShopMenueMouseEnter2(){
        let shop_menu = document.getElementById("shop-menu")
        if(!shop_menu.classList.contains("d-none")){
            shop_menu.classList.add("sure")
            shop_menu.style.animationName = "menu-animation"
            shop_menu.classList.add("d-none")
            shop_menu.classList.remove("d-none")
        }
    } 

    return (
        <div id="bottom-part" className=''>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className='d-flex flex-grow-1'>
                    <img className='logo mx-auto' src="images/logo.png" />
                </a>

                <div className="collapse navbar-collapse mx-auto" id="navbarSupportedContent">
                    <ul className="navbar-nav align-items-center mx-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link mx-3" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item mx-2" onMouseEnter={HandleProductMenueMouseEnter} onMouseLeave={HandleProductMenueMouseLeave}>
                            <a className="nav-link" href="#">Product</a>
                        </li>
                        <li className="nav-item mx-2 position-relative" onMouseEnter={HandleShopMenueMouseEnter} onMouseLeave={HandleShopMenueMouseLeave}>
                            <a className="nav-link" href="#">Shop</a>
                            <div id="shop-menu" className='d-none' onMouseEnter={HandleShopMenueMouseEnter2} onMouseLeave={HandleShopMenueMouseLeave}>
                                <ul className=' list-unstyled'>
                                    <li><Link className="nav-link" to="/cart">Cart</Link></li>
                                    <li><Link className="nav-link" to="/checkout">Checkout</Link></li>
                                    <li><Link className="nav-link" to="/myaccount">My Account</Link></li>
                                    <li><Link className="nav-link" to="/wishlist">Wishlist</Link></li>
                                    <li><Link className="nav-link" to="/shop-detail">Shop Detail</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/our-services">Our Service</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/contact-us">Contact Us</Link>
                        </li>
                        <li className="nav-item ms-5 me-4" onClick={toggleSearchBox}>
                            <a><i className="fa fa-search" aria-hidden="true"></i></a>
                        </li>
                        <li className="nav-item">
                            <a><i className="fa-solid fa-cart-shopping"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className='d-flex justify-content-center'>
                <div className="d-flex justify-content-center align-items-center p-4 d-none" id="product-menu" onMouseEnter={HandleProductMenueMouseEnter2} onMouseLeave={HandleProductMenueMouseLeave}>
                    <div className='product-menu-item ms-auto'>
                        <ul className='list-unstyled border-secondary ps-4'>
                            <li className='title'>TOP</li>
                            <li><Link className="nav-link" to="/shop">Jackets</Link></li>
                            <li><Link className="nav-link" to="/shop">Shirts</Link></li>
                            <li><Link className="nav-link" to="/shop">Sweeters & Cardigans</Link></li>
                            <li><Link className="nav-link" to="/shop">T-Shirts</Link></li>
                        </ul>
                    </div>
                    <div className='product-menu-item'>
                        <ul className='list-unstyled border-start border-secondary ps-2'>
                            <li className='title'>BOTTOM</li>
                            <li><Link className="nav-link" to="/shop">Swinwear</Link></li>
                            <li><Link className="nav-link" to="/shop">Skirts</Link></li>
                            <li><Link className="nav-link" to="/shop">Jeans</Link></li>
                            <li><Link className="nav-link" to="/shop">Trousers</Link></li>
                        </ul>
                    </div>
                    <div className='product-menu-item'>
                        <ul className='list-unstyled border-start border-secondary ps-2'>
                            <li className='title'>CLOTHING</li>
                            <li><Link className="nav-link" to="/shop">Top Wear</Link></li>
                            <li><Link className="nav-link" to="/shop">Party Wear</Link></li>
                            <li><Link className="nav-link" to="/shop">Bottom Wear</Link></li>
                            <li><Link className="nav-link" to="/shop">Indian Wear</Link></li>
                        </ul>
                    </div>
                    <div className='product-menu-item me-auto'>
                        <ul className='list-unstyled border-start border-secondary px-3'>
                            <li className='title'>ACCESSORIES</li>
                            <li><Link className="nav-link" to="/shop">Bags</Link></li>
                            <li><Link className="nav-link" to="/shop">Sunglasses</Link></li>
                            <li><Link className="nav-link" to="/shop">Fragrances</Link></li>
                            <li><Link className="nav-link" to="/shop">Wallets</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}