import React from 'react'
import Ribbon from '/ribbon.svg'
import './styles/Sponsors.css'

const SponsCard = ({img, domain}) => {
    return (
        <div className='spons-card'>
            <img src={img} alt='spons-logo' className='spons-logo' />
            <img src={Ribbon} alt='ribbon' className='ribbon-design' />
            <p>{domain} PARTNER</p>
        </div>
    )
}

export default SponsCard