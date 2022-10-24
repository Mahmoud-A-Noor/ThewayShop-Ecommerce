import React from 'react';
import Header from "../about/Header";
import InstagramCarousel from '../home/Instagram_Carousel';

export default function ContactUs() {

    function handleSubmitButtonOpacity() {
        let submit_button = document.getElementById("contact-form-submit")
        let inputs = document.getElementsByClassName("contact-form-input")
        let all_inputs_filled = true
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value === "") {
                all_inputs_filled = false;
                break;
            }
        }
        if (all_inputs_filled) {
            submit_button.style.opacity = "1"
        }
        else {
            submit_button.style.opacity = "0.5"
        }
    }

    function handleInputOnChange(e){
        let warning = e.target.nextSibling
        if(e.target.value === ""){
            warning.style.visibility = "visible"
        }else{
            warning.style.visibility = "hidden"
        }
        handleSubmitButtonOpacity()
    }

    function handleInputOnFocusOut(e){
        let warning = e.target.nextSibling
        if(e.target.value === ""){
            warning.style.visibility = "visible"
            e.target.style.borderColor = "#d33b33"
        }else{
            warning.style.visibility = "hidden"
            e.target.style.borderColor = "#ced4da"
        }
    }

    return (
        <div>
            <Header page={"Contact Us"} />
            <div id="contact-us">
                <div className="container">
                    <div className='row'>
                        <div className="col-lg-4 col-sm-12">
                            <div id="contact-us-contact-info">
                                <h2>CONTACT INFO</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate.</p>
                                <div id="contact-us-contact-info-details" className='d-flex flex-column'>
                                    <div className=' d-flex align-items-start justify-content-start position-relative'>
                                        <i className="fa fa-map-marker contact_us-icon position-absolute" aria-hidden="true"></i>
                                        <p className='px-4'>
                                            Address: Michael I. Days 3756 <br/>
                                            Preston Street Wichita, <br/>
                                            KS 67213
                                        </p>
                                    </div>
                                    <div className=' d-flex align-items-start justify-content-start position-relative'>
                                        <i className="fas fa-phone-square contact_us-icon position-absolute" aria-hidden="true"></i>
                                        <p className='px-4'>
                                            Phone: <span>+1-888 705 770</span>
                                        </p>
                                    </div>
                                    <div className=' d-flex align-items-start justify-content-start position-relative'>
                                        <i className="fas fa-envelope contact_us-icon position-absolute" aria-hidden="true"></i>
                                        <p className='px-4'>
                                            Email: <span>contactinfo@gmail.com</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-12">
                            <div id="contact-us-contact-form">
                                <h2>GET IN TOUCH</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio justo, ultrices ac nisl sed, lobortis porta elit. Fusce in metus ac ex venenatis ultricies at cursus mauris.</p>
                                <form>
                                    <div className='contact-form-input-container position-relative'>
                                        <input className='contact-form-input' type="text" placeholder="Your Name" onBlur={(e)=>handleInputOnFocusOut(e)} onChange={handleInputOnChange} />
                                        <div className='contact-form-warning'>Please enter your name</div>
                                    </div>
                                    <div className='contact-form-input-container position-relative'>
                                        <input className='contact-form-input' type="text" placeholder="Your Email" onBlur={(e)=>handleInputOnFocusOut(e)} onChange={handleInputOnChange} />
                                        <div className='contact-form-warning'>Please enter your email</div>
                                    </div>
                                    <div className='contact-form-input-container position-relative'>
                                        <input className='contact-form-input' type="text" placeholder="Subject" onBlur={(e)=>handleInputOnFocusOut(e)} onChange={handleInputOnChange} />
                                        <div className='contact-form-warning'>Please enter your Subject</div>
                                    </div>
                                    <div className='contact-form-input-container position-relative'>
                                        <textarea className='contact-form-input' placeholder="Your Message" rows="4" cols="50" onBlur={(e)=>handleInputOnFocusOut(e)} onChange={handleInputOnChange} ></textarea>
                                        <div className='contact-form-warning'>Write Your Message</div>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <a id='contact-form-submit' className='hvr-shutter-out-vertical' type="submit">Send Message</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <InstagramCarousel />
        </div>
    )
}