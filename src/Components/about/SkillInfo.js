import React from 'react';

export default function SkillInfo({skills}) {
    return (
        <div  id="skill-info">
            <div className='container'>
                <div className='row'>
                    {skills.map((skill, index) => {
                        return (
                            <div className="about-thewayshop-info-box-container col-lg-4 col-md-6 col-sm-12" key={index}>
                                <div className='d-flex position-relative'>
                                    <div className='about-thewayshop-info-box-left'></div>
                                    <div className='about-thewayshop-info-box-left-overlay position-absolute'></div>
                                    <div className='about-thewayshop-info-box-text-container'>
                                        <h2>
                                            {skill}
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}