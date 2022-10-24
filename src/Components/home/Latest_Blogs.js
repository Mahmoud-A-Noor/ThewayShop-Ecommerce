import React from 'react';

export default function Latest_Blogs() {


    let blogs = [];
    for (let i=0; i<3; i++){
        blogs.push(
            (
                <div className='col-lg-4 col-md-6 col-sm-12' key={i}>
                    <img src={`images/blog-img-0${i+1}.jpg`} className='fluid-image' />
                    <div className='blog-content'>
                        <div className='blog-text'>
                            <h3>Fusce in augue non nisi fringilla</h3>
                            <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                        </div>
                        <div className='blog-options'>
                            <ul className=' list-unstyled'>
                                <li data-bs-toggle="tooltip" data-bs-placement="right" data-bs-custom-class="custom-tooltip" data-bs-title="Likes">
                                    <i className="far fa-heart"></i>
                                </li> 
                                <li data-bs-toggle="tooltip" data-bs-placement="right" data-bs-custom-class="custom-tooltip" data-bs-title="Views">
                                    <i className="fas fa-eye"></i>
                                </li> 
                                <li data-bs-toggle="tooltip" data-bs-placement="right" data-bs-custom-class="custom-tooltip" data-bs-title="Comments">
                                    <i className="far fa-comments"></i>
                                </li> 
                            </ul>
                        </div>
                    </div>
                </div>
            )
        )
    }

    return (
        <div id="latest-blog" className='d-flex justify-content-center align-items-center'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='text-center mb-5'>
                            <h2>Latest Blogs</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {blogs}
                </div>
            </div>
        </div>
    )
}