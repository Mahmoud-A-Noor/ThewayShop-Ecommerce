import React from 'react'
import {useState, useEffect} from 'react'
import Featured_Products_Product from './Featured_Products_Product'

export default function Featured_Products() {

    const [filtered_featured_produts, set_filtered_featured_produts] = useState([])
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
        },
        {
            id: 4,
            image: "images/img-pro-04.jpg",
            tag: "SALE",
            price: "$15.79"
        }
    ]


    function featuredProductsButtonPressed(button_num){
        let featured_products = document.getElementsByClassName('featured-products-button');
        for (let i = 0; i < featured_products.length; i++) {
            if (i == button_num) {
                featured_products[i].classList.add('bg-dark');
            } else {
            featured_products[i].classList.remove('bg-dark');
            }
        }
        let filtered_featured_produts_objects;
        if (button_num == 0) {
            filtered_featured_produts_objects = all_featured_produts;
        }else if (button_num == 1){
            filtered_featured_produts_objects = all_featured_produts.filter((product) => product.id == 2 || product.id == 3);
        }else{
            filtered_featured_produts_objects = all_featured_produts.filter((product) => product.id == 1 || product.id == 4);
        }
        set_filtered_featured_produts(filtered_featured_produts_objects.map((product) => {
                return (
                    <div className='col-lg-3 col-md-6 col-sm-12 featured-product-card' key={product.id}>
                        <Featured_Products_Product product={product}  />
                    </div>
                );
        }));


    }

    useEffect(() => {
        featuredProductsButtonPressed(0)
    }, []);

    return (
        <div id="featured-products" className="container">
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h2>Featured Products</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button" className='featured-products-button bg-dark' onClick={()=>{featuredProductsButtonPressed(0)}}>All</button> 
                    <button type="button" className='featured-products-button' onClick={()=>{featuredProductsButtonPressed(1)}}>Top Featured</button>
                    <button type="button" className='featured-products-button' onClick={()=>{featuredProductsButtonPressed(2)}}>Best Seller</button>
                </div>
            </div>
            <div id="featured-products-images" className="row mt-5 justify-content-start">
                {filtered_featured_produts}
            </div>                
        </div>
    );
}