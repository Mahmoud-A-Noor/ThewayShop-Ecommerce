import React from 'react';

export default function LeftSidebar() {

    function toggle_submenu(e) {
        let submenu = e.target.nextElementSibling;
        submenu.classList.toggle("d-none");
    }

    return (
        <div id="shop-left-sidebar" className='col-3'>
            <div id="shop-search">
                <input type="text" placeholder="Search here..." />
                <button><i className="fa fa-search"></i></button>
            </div>

            <h3 className='shop-sidebar-header'>Categories</h3>
            <div id="shop-categories">
                <a className='sub-menu-toggler d-flex justify-content-between cursor' onClick={(e) => toggle_submenu(e)}>
                    <span>Clothing<small className='small'> (100)</small></span>
                    <i className="fa fa-angle-down"></i>
                </a>
                <div className="sub-menu d-none">
                    <ul className=' list-unstyled'>
                        <li className=' d-flex position-relative'><span className=' position-absolute'>_</span><a href="#">T-Shirts <small className='small'> (50)</small></a></li>
                        <li className=' d-flex position-relative'><span className=' position-absolute'>_</span><a href="#">Polo T-Shirts <small className='small'> (10)</small></a></li>
                        <li className=' d-flex position-relative'><span className=' position-absolute'>_</span><a href="#">Round Neck T-Shirts <small className='small'> (10)</small></a></li>
                        <li className=' d-flex position-relative'><span className=' position-absolute'>_</span><a href="#">V Neck T-Shirts <small className='small'> (10)</small></a></li>
                        <li className=' d-flex position-relative'><span className=' position-absolute'>_</span><a href="#">Hooded T-Shirts <small className='small'> (20)</small></a></li>
                    </ul>
                </div>

                <a className='sub-menu-toggler d-flex justify-content-between cursor bg-white' onClick={(e) => toggle_submenu(e)}>
                    <span>Footwear<small className='small'> (50)</small></span>
                    <i className="fa fa-angle-down"></i>
                </a>
                <div className="sub-menu d-none">
                    <ul className=' list-unstyled'>
                        <li className=' d-flex position-relative'><span className=' position-absolute'>_</span><a href="#">Sports Shoes <small className='small'> (10)</small></a></li>
                        <li className=' d-flex position-relative'><span className=' position-absolute'>_</span><a href="#">Sneakers <small className='small'> (20)</small></a></li>
                        <li className=' d-flex position-relative'><span className=' position-absolute'>_</span><a href="#">Formal Shoes <small className='small'> (20)</small></a></li>
                    </ul>
                </div>

                <a className='sub-menu-toggler d-flex cursor bg-white'>
                    <span>Men<small className='small'> (150)</small></span>
                </a>
                <a className='sub-menu-toggler d-flex cursor bg-white'>
                    <span>Accessories<small className='small'> (11)</small></span>
                </a>
                <a className='sub-menu-toggler d-flex cursor bg-white'>
                    <span>Bags<small className='small'> (22)</small></span>
                </a>

            </div>

            <h3 className='shop-sidebar-header'>Price</h3>
            <div id="shop-price">
            </div>

            <h3 className='shop-sidebar-header'>Brand</h3>
            <div id="shop-brands">
                <div className='shop-brand'>
                    <input type="radio" id="Supreme" />
                    <label htmlFor="Supreme">Supreme</label><br></br>
                </div>
                <div className='shop-brand'>
                    <input type="radio" id="A Bathing Ape" />
                    <label htmlFor="A Bathing Ape">A Bathing Ape</label><br></br>
                </div>
                <div className='shop-brand'>
                    <input type="radio" id="The Hundreds" />
                    <label htmlFor="The Hundreds">The Hundreds</label><br></br>
                </div>
                <div className='shop-brand'>
                    <input type="radio" id="Alife" />
                    <label htmlFor="Alife">Alife</label><br></br>
                </div>
                <div className='shop-brand'>
                    <input type="radio" id="Neighborhood" />
                    <label htmlFor="Neighborhood">Neighborhood</label><br></br>
                </div>
                <div className='shop-brand'>
                    <input type="radio" id="CLOT" />
                    <label htmlFor="CLOT">CLOT</label><br></br>
                </div>
                <div className='shop-brand'>
                    <input type="radio" id="Acapulco Gold" />
                    <label htmlFor="Acapulco Gold">Acapulco Gold</label><br></br>
                </div>
                <div className='shop-brand'>
                    <input type="radio" id="UNDFTD" />
                    <label htmlFor="UNDFTD">UNDFTD</label><br></br>
                </div>
                <div className='shop-brand'>
                    <input type="radio" id="Mighty Healthy" />
                    <label htmlFor="Mighty Healthy">Mighty Healthy</label><br></br>
                </div>
                <div className='shop-brand'>
                    <input type="radio" id="Fiberops" />
                    <label htmlFor="Fiberops">Fiberops</label><br></br>
                </div>
            </div>
        </div>
    )
}