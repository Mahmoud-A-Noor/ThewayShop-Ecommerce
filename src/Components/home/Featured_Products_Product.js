import React from 'react'


export default function Featured_Products_Product({product}) {

    function show_overlay(e){
        let featured_product_card = e.target.closest('.featured-product-card');
        let overlay = featured_product_card.querySelector('#featured-product-image-overlay');
        overlay.style.animationName = 'featured-product-overlay';
        overlay.classList.remove('d-none');
    }

    function hide_overlay(e){
        let featured_product_card = e.target.closest('.featured-product-card');
        let overlay = featured_product_card.querySelector('#featured-product-image-overlay');
        overlay.style.animationName = 'featured-product-overlay-2';
        setTimeout(() => {
            overlay.classList.add('d-none');
        }, 1000);
    }

    return (
        <div>
            <div className=' position-relative'  onMouseEnter={e=>(show_overlay(e))} onMouseLeave={e=>(hide_overlay(e))}>
                <div id="featured-product-image-overlay" className='d-flex position-absolute d-none'>
                    <div className=' position-relative w-100 h-100'>
                        <ul className=' list-unstyled'>
                            <li data-bs-toggle="tooltip" data-bs-placement="right" data-bs-custom-class="custom-tooltip" data-bs-title="Views" className='cursor'>
                                <i className="fas fa-eye"></i>
                            </li> 
                            <li data-bs-toggle="tooltip" data-bs-placement="right" data-bs-custom-class="custom-tooltip" data-bs-title="Compare" className='cursor'>
                                <i className="fas fa-sync-alt"></i>
                            </li> 
                            <li data-bs-toggle="tooltip" data-bs-placement="right" data-bs-custom-class="custom-tooltip" data-bs-title="Likes" className='cursor'>
                                <i className="far fa-heart"></i>
                            </li> 
                        </ul>
                        <a href='#' className=' position-absolute'>
                            Add To Cart
                        </a>
                    </div>
                </div>
                <img src={product.image} className=' w-100 h-100' />
                {product.tag ? <div id="featured-product-tag">
                    <p>{product.tag}</p>
                </div> : null}
                
            </div>
            
            <div id="featured-product-text" className='d-flex flex-column align-items-start p-2'>
                <p>Lorem ipsum dolor sit amet</p>
                <p>{product.price}</p>
            </div>
        </div>
    )
}