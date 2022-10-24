import React from 'react';
import SkillInfo from './SkillInfo';

export default function Info() {
    return (
        <>
            <div id="about-thewayshop-info">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div id="about-thewayshop-info-text">
                                <h2>WE ARE THEWAYSHOP</h2>
                                <p className='mb-3'>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src="images/about-img.jpg" className='w-100' />
                        </div>
                    </div>
                </div>
            </div>
            <SkillInfo skills={["WE ARE TRUSTED", "WE ARE PROFESSIONAL", "WE ARE EXPERT"]} />
        </>
    )
}