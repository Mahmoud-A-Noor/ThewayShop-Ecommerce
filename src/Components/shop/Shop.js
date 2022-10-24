import React from 'react';
import { useState, useEffect } from 'react';

import Header from '../about/Header';
import InstagramCarousel from '../home/Instagram_Carousel';
import LeftSidebar from './LeftSidebar';
import Featured_Products_Product from '../home/Featured_Products_Product';

export default function Shop() {

    function handle_sortby_select_focus() {
        let sortby_select = document.getElementById("sortby-select");
        sortby_select.style.color = "black";
    }

    function handle_sortby_select_blur() {
        let sortby_select = document.getElementById("sortby-select");
        sortby_select.style.color = "white";
    }

    function change_view(e){

    }

    let all_featured_produts = [
        {
            id: 1,
            image: "images/img-pro-01.jpg",
            tag: "SALE",
            price: "$7.79"
        },
        {
            id: 2,
            image: "images/img-pro-02.jpg",
            tag: "NEW",
            price: "$9.79"

        },
        {
            id: 3,
            image: "images/img-pro-03.jpg",
            tag: "SALE",
            price: "$10.79"
        },{
            id: 4,
            image: "images/img-pro-01.jpg",
            tag: "SALE",
            price: "$7.79"
        },
        {
            id: 5,
            image: "images/img-pro-02.jpg",
            tag: "NEW",
            price: "$9.79"

        },
        {
            id: 6,
            image: "images/img-pro-03.jpg",
            tag: "SALE",
            price: "$10.79"
        },{
            id: 7,
            image: "images/img-pro-01.jpg",
            tag: "SALE",
            price: "$7.79"
        },
        {
            id: 8,
            image: "images/img-pro-02.jpg",
            tag: "NEW",
            price: "$9.79"

        },
        {
            id: 9,
            image: "images/img-pro-03.jpg",
            tag: "SALE",
            price: "$10.79"
        }
    ]

    let [products, set_products] = useState([])
    

    useEffect(() => {
        set_products(all_featured_produts.map((product) => {
            return (
                <div className='col-4 featured-product-card' key={product.id}>
                    <Featured_Products_Product product={product}  />
                </div>
            );
    }))}, []);

    return (
        <div>
            <Header page={"Shop"} />
            <div id="shop">
                <div className='container'>
                    <div className='row'>
                        <LeftSidebar />
                        <div id="shop-content" className='col-9'>
                            <div id="shop-content-header" className='d-flex align-items-center'>
                                <div id="shop-content-sort" className='d-flex align-items-center w-50'>
                                    <span className='w-25'>Sort by</span>
                                    <div className=' w-100'>
                                        <select id="sortby-select" className="form-select form-select-md custom-select cursor" onFocus={(e)=>handle_sortby_select_focus(e)} onBlur={(e)=>handle_sortby_select_blur(e)}>
                                            <option defaultValue>Nothing</option>
                                            <option onClick={(e)=>handle_sortby_select_blur(e)}>Popularity</option>
                                            <option onClick={(e)=>handle_sortby_select_blur(e)}>High Price → High Price</option>
                                            <option onClick={(e)=>handle_sortby_select_blur(e)}>Low Price → High Price</option>
                                            <option onClick={(e)=>handle_sortby_select_blur(e)}>Best Selling</option>
                                        </select>
                                    </div>
                                </div>
                                <div id="shop-content-view" className='d-flex align-items-center justify-content-between w-50'>
                                    <span>Showing all 4 results</span>
                                    <div className='d-flex align-items-center'>
                                        <i className="fa fa-th cursor shop-selected-view" onClick={(e) => change_view(e)}></i>
                                        <i className="fa fa-list-ul cursor" onClick={(e) => change_view(e)}></i>
                                    </div>
                                </div>
                            </div>
                            <div className='row gy-4 p-3'>
                                {products}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <InstagramCarousel />
        </div>
    )
}