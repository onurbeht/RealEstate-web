import React from 'react'

import './Started.css'

const Started = () => {
    return (
        <section id="GetStarted" className="started-wrapper">
            <div className="innerWidth paddings started-container">
                <div className="paddings flexColCenter insider-container">
                    <span className='primaryText'>Get started with Homyz</span>
                    <span className='secondaryText'>Subscribe and find super attractive price quotes from us.</span>
                    <span className='secondaryText'>Find your residence soon</span>
                    <button className='button'><a href='mailto:emailfake@email.com'>Get Started</a></button>
                </div>
            </div>
        </section>
    )
}

export default Started