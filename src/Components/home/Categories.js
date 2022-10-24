import React from 'react';

export default function Categories() {
    return (
        <div id="categories">
                <div className='container mt-5'>
                    <div className='row justify-content-center'>
                        <div className='category col-lg-3 col-md-5 col-sm-12'>
                            <img src="images/t-shirts-img.jpg" className=' w-100 h-100' />
                            <a href='#' className='hvr-shutter-in-vertical'>T-Shirt</a>
                        </div>
                        <div className='category col-lg-3 col-md-5 col-sm-12'>
                            <img src="images/wallet-img.jpg" className=' w-100 h-100' />
                            <a href='#' className='hvr-shutter-in-vertical'>Wallet</a>
                        </div>
                        <div className='category col-lg-3 col-md-5 col-sm-12'>
                            <img src="images/shoes-img.jpg" className=' w-100 h-100' />
                            <a href='#' className='hvr-shutter-in-vertical'>Shoes</a>
                        </div>
                        <div className='category col-lg-3 col-md-5 col-sm-12'>
                            <img src="images/shirt-img.jpg" className=' w-100 h-100' />
                            <a href='#' className='hvr-shutter-in-vertical'>Shirt</a>
                        </div>
                        <div className='category col-lg-3 col-md-5 col-sm-12'>
                            <img src="images/women-bag-img.jpg" className=' w-100 h-100' />
                            <a href='#' className='hvr-shutter-in-vertical'>Bags</a>
                        </div>
                        <div className='category col-lg-3 col-md-5 col-sm-12'>
                            <img src="images/women-shoes-img.jpg" className=' w-100 h-100' />
                            <a href='#' className='hvr-shutter-in-vertical'>Women Shoes</a>
                        </div>
                    </div>
                </div>
            </div>
    )
}