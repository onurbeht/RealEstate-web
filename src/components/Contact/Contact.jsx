import React from 'react'

import { BsCameraVideoFill, BsChatDotsFill, BsChatFill, BsTelephoneFill } from 'react-icons/bs'

import './Contact.css'

const Contact = () => {
    return (
        <section id="ContactUs" className="contact-wrapper">
            <div className="paddings innerWidth flexCenter contact-container">
                {/*LEFT SIDE*/}
                <div className="flexColStart c-left">
                    <span className='orangeText'>Our Contact Us</span>
                    <span className='primaryText'>Easy to contact us</span>
                    <span className='secondaryText'>We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</span>
                    <div className="flexCenter row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="icon"><BsTelephoneFill /></div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>4002-8922</span></div>
                            </div>
                            <button className='flexCenter button'>Call now</button>
                        </div>
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="icon"><BsChatDotsFill /></div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>4002-8922</span></div>
                            </div>
                            <button className='flexCenter button'>Chat now</button>
                        </div>
                    </div>
                    <div className="flexCenter row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="icon"><BsCameraVideoFill /></div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Video Call</span>
                                    <span className='secondaryText'>4002-8922</span></div>
                            </div>
                            <button className='flexCenter button'>Video Call now</button>
                        </div>
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="icon"><BsChatFill /></div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>4002-8922</span></div>
                            </div>
                            <button className='flexCenter button'>Message now</button>
                        </div>
                    </div>
                </div>

                {/*RIGHT SIDE*/}
                <div className="flexEnd c-right">
                    <div className="img-container">
                        <img src="/contact.jpg" alt="House image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact