import React from 'react'

import './Companies.css'

const Companies = () => {
    return (
        <section className='companies-wrapper'>
            <div className=" paddings innerWidth flexCenter companies-container">
                <img src="/equinix.png" alt="Equinix" />
                <img src="/prologis.png" alt="Prologis" />
                <img src="/realty.png" alt="Realty" />
                <img src="/tower.png" alt="Tower" />
            </div>
        </section>
    )
}

export default Companies